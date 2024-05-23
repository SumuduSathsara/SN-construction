// src/AboutUs.js
import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <section className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide high-quality products and services that 
            meet the needs of our customers and exceed their expectations.
          </p>
        </section>
        <section className="about-us-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where our solutions improve the quality of life 
            and make a positive impact on the global community.
          </p>
        </section>
        <section className="about-us-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of dedicated professionals who are passionate 
            about their work and committed to delivering exceptional results.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
