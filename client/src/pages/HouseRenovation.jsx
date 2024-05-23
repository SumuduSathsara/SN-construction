import React from 'react';
import Back from '../components/Back';
import myImage1 from '../images/Renovation (2).jpg';
import myImage2 from '../images/Renovation.jpg'; // Make sure to replace with the actual path to the new image
import './House_Renovation.css';

export default function HouseRenovation() {
  return (
    <div>
      <Back title="House Renovation"/>
      
      <div className="renovation wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="renovation-img">
                <img className="d-block w-100" src={myImage1} alt="First slide"/>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left">
                <p>Welcome to SN CONSTRUCTION Renovations</p>
                <h2>Crafting Dream Home</h2>
              </div>
              <div className="renovation-text">
                <p>
                  At SN CONSTRUCTION, we understand that your home is more than just a building; it's a reflection of your
                  personality, lifestyle, and aspirations. That's why we're passionate about helping you transform your house 
                  into the home of your dreams through our comprehensive renovation services.
                </p>
                <p>
                  With over 31 years of construction experience, SN Construction delivers exceptional results tailored to your vision. 
                  From kitchen modernization to bathroom revamps and expanding living spaces, we ensure quality craftsmanship that exceeds
                  expectations. With transparent communication, we keep you informed every step of the way. Your satisfaction is our priority. 
                  Ready to transform your house into your dream home? Contact us today to schedule a consultation. Let SN Construction be your
                  partner in creating a space as unique as you are.
                </p>
                <a className="btn" href="">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="renovation wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 order-lg-1 order-md-1 order-2">
              <div className="section-header text-left">
                <p>Why Choose Us?</p>
                <h2>Quality Renovations</h2>
              </div>
              <div className="renovation-text">
                <p>
                  At SN CONSTRUCTION, we take pride in delivering high-quality renovations that stand the test of time. Our team of skilled
                  professionals uses the best materials and techniques to ensure your home renovation exceeds your expectations.
                </p>
                <p>
                  Whether it's a small remodel or a complete home makeover, our attention to detail and commitment to excellence remain 
                  consistent. We listen to your needs and work closely with you to bring your vision to life, ensuring your home reflects
                  your style and preferences.
                </p>
                <a className="btn" href="">Learn more</a>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 order-lg-2 order-md-2 order-1">
              <div className="renovation-img">
                <img className="d-block w-100" src={myImage2} alt="Second slide"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
