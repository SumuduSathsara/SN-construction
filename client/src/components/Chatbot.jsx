import React, { useState, useRef, useEffect } from 'react';
import questionsData from './questions.json';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faRobot, faXmark } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'incoming', content: 'Hi there 👋\nHow can I help you today?' }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const chatboxRef = useRef(null);

  const handleSend = () => {
    if (!userMessage.trim()) return;

    const newMessages = [...messages, { type: 'outgoing', content: userMessage }];
    setMessages(newMessages);
    const question = userMessage.trim().toLowerCase();
    const matchedQuestion = questionsData.questions.find(q => q.question.includes(question));
    const answer = matchedQuestion ? matchedQuestion.answer : "Oops! I don't have an answer for that.";

    const responseMessage = {
      type: 'incoming',
      content: answer,
      isMatched: !!matchedQuestion // Adding isMatched flag
    };
    setMessages((prevMessages) => [...prevMessages, responseMessage]);
    setUserMessage('');
  };

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className={`fixed bottom-7 right-12 ${isOpen ? 'show-chatbot' : ''}`}>
      <button className="chatbot-toggler bg-amber-400 text-white rounded-full h-14 w-14 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}>
          
        <span className="material-symbols-rounded text-2xl"><FontAwesomeIcon icon={faMessage} /></span>
      </button>
      <div
        className={`chatbot fixed right-40 bottom-14 bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-100 ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
        style={{ transformOrigin: 'bottom right' }}
      >
        <header className="bg-cyan-900 text-white p-4 relative">
          <h2 className="text-center text-lg">Chatbot</h2>
          <span className="material-symbols-outlined absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faXmark} /></span>
        </header>
        <ul className="chatbox overflow-y-auto p-6 h-96" ref={chatboxRef}>
          {messages.map((message, index) => (
            <li key={index} className={`chat flex ${message.type === 'outgoing' ? 'justify-end' : ''} my-4`}>
              {message.type === 'incoming' && (
                <span className={`material-symbols-outlined ${message.isMatched ? 'bg-amber-400 text-white' : 'bg-red-600 text-white'} rounded-full h-8 w-8 flex items-center justify-center mr-2`}>
                  <FontAwesomeIcon icon={faRobot} />
                </span>
              )}
              <p className={`p-3 rounded-lg ${message.type === 'incoming' ? (message.isMatched ? 'bg-gray-200 text-black' : 'bg-red-200 text-red-800') : 'bg-cyan-900 text-white'} rounded-tl-none max-w-xs`}>
                {message.content}
              </p>
            </li>
          ))}
        </ul>
        <div className="chat-input p-4 flex items-center border-t">
          <textarea
            className="flex-grow resize-none border-none outline-none h-14 p-3 text-sm sm:text-base" // Adjusted text size for responsiveness
            placeholder="Ask me anything..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <span
            className={`material-symbols-rounded text-purple-600 cursor-pointer ${userMessage.trim() ? '' : 'invisible'}`}
            onClick={handleSend}
          >
            send
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
