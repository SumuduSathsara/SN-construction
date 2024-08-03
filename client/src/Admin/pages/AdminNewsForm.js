import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Adminheader from "../Component/Adminheader";


const AdminNewsForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [newsList, setNewsList] = useState([]);
  const [editingNewsId, setEditingNewsId] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:3001/sever/news');
      setNewsList(response.data);
    } catch (err) {
      console.error(err);
      alert('Error fetching news');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNewsId) {
        await axios.put(`http://localhost:3001/sever/news/${editingNewsId}`, { title, content });
        alert('News updated successfully');
      } else {
        await axios.post('http://localhost:3001/sever/news', { title, content });
        alert('News submitted successfully');
      }
      setTitle('');
      setContent('');
      setEditingNewsId(null);
      fetchNews();
      scrollToTop();
    } catch (err) {
      console.error(err);
      alert('Error submitting news');
    }
  };

  const handleEdit = (news) => {
    setTitle(news.title);
    setContent(news.content);
    setEditingNewsId(news.id);
    scrollToForm();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/sever/news/${id}`);
      alert('News deleted successfully');
      fetchNews();
      scrollToTop();
    } catch (err) {
      
      console.error('Error deleting news:', err);
      alert('Error deleting news');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">

<Adminheader
        title="News"
        subtitle="Connecting the World's News"
      />

     
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
             focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="6"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500
             focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm 
            text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2
             focus:ring-offset-2 focus:ring-indigo-500"
          >
            {editingNewsId ? 'Update News' : 'Submit News'}
          </button>
        </div>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">News List</h3>
        <ul className="space-y-4">
          {newsList.map((news) => (
            <li key={news.id} className="border p-4 rounded-md shadow-sm">
              <h4 className="text-lg font-bold">{news.title}</h4>
              <p className="mt-2">{news.content}</p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleEdit(news)}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
                   bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(news.id)}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
                   bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminNewsForm;
