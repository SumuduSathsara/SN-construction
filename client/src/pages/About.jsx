import React from 'react';
import Back from '../components/Back';
import Building from '../images/Building.jpg';
import myImage2 from '../images/Renovation.jpg'; // Replace with actual path
import './Bu_Constrac.css';

export default function BuildingConstraction() {
  return (
    <>
      <Back title="About us" />

      <div className="building wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="building-img">
                <img className="d-block w-100" src={Building} alt="Building" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left">
                <p>Building Dreams into Reality for Over 31 Years</p>
                <h3>"A Legacy of Excellence and Innovation in Construction"</h3>
              </div>
              <div className="building-text">
                <p>
                Welcome to SN CONSTRUCTION, where for over 31 years, we've been dedicated to transforming dreams into reality. Founded on 
                principles of integrity, quality, and unwavering commitment to customer satisfaction, SN CONSTRUCTION stands as a pillar
                in the construction industry. Our legacy of excellence and passion for innovation have placed us at the forefront of the industry,
                consistently delivering exceptional results on every project we undertake. By blending tradition with forward-thinking approaches, 
                we not only meet but exceed expectations, ensuring our clients' visions are brought to life with superior craftsmanship. Our reputation 
                for reliability speaks to our dedication to shaping landscapes and communities through quality construction, making SN CONSTRUCTION a trusted 
                name in the industry for over three decades.
                </p>
                <a className="btn" href="">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="building wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 order-lg-1 order-md-1 order-2">
              <div className="section-header text-left">
                <p>Our Journey</p>
                <h3>"31 Years of Shaping Dreams into Reality in Construction"</h3>
              </div>
              <div className="building-text">
                <p>
                Established in 31 Year, SN CONSTRUCTION has grown from humble beginnings into a trusted leader in the construction sector. 
                For over three decades, we have been a trusted name synonymous with quality craftsmanship, innovation, and reliability.
                Our journey began with a vision to redefine the construction experience, emphasizing collaboration, transparency, and craftsmanship. 
                Since then, we have successfully completed a diverse range of projects, from residential and commercial buildings to infrastructure 
                developments.Over the years, we've evolved and adapted to meet the changing needs of our clients and the industry, while staying true 
                to our core values.
                </p>
                <a className="btn" href="">Learn more</a>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 order-lg-2 order-md-2 order-1">
              <div className="building-img">
                <img className="d-block w-100" src={myImage2} alt="Second slide" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="building wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="building-img">
                <img className="d-block w-100" src={Building} alt="Building" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left">
                <p>Our Mission</p>
                <h3>"31 Years of Building Dreams into Reality"</h3>
              </div>
              <div className="building-text">
                <p>
                Our mission is  to exceed expectations and inspire trust with every project we undertake. We're committed to delivering innovative solutions,
                unparalleled craftsmanship, and personalized service to each client, regardless of the size or scope of their project. <br/>Our goal is not just 
                to build structures, but to create lasting relationships and leave a positive impact on the communities we serve.
                </p>
                <a className="btn" href="">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
