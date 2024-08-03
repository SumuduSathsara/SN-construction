import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewsList.css'; 

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:3001/sever/news');
        setNews(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 2, 
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false 
  };

  return (
    
    <div className="max-w-4xl mx-auto p-4">
      <div className="section-header text-center mb-8">
        <h1 className="text-3xl font-bold">Latest News</h1>
      </div>
      <Slider {...settings}>
        {news.map((item) => (
          <div key={item._id} className="p-4 news-slide">
            <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden news-item">
              <div className="p-6 bg-white ">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.content}</p>
                <p className="text-gray-500 text-sm">Date: {new Date(item.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsList;
