import React from 'react';
import Back from '../components/Back';
import Building from '../images/Building.jpg';
import myImage2 from '../images/Renovation.jpg'; // Replace with actual path
import './Bu_Constrac.css';

export default function BuildingConstraction() {
  return (
    <>
      <Back title="Building Constraction" />

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
                <p>Building Construction Services by SN CONSTRUCTION</p>
                <h2>Shaping Urban Skylines</h2>
              </div>
              <div className="building-text">
                <p>
                  At SN CONSTRUCTION, we specialize in providing comprehensive building construction services tailored to meet the
                  unique needs of our clients. From residential homes to commercial buildings and industrial facilities, our expertise
                  spans a wide range of construction projects, ensuring high-quality outcomes and client satisfaction.
                </p>
                <p>
                  We specialize in delivering comprehensive building construction solutions tailored to meet the diverse needs of commercial
                  and institutional clients. With a steadfast commitment to quality and innovation, our team of experienced architects, engineers,
                  and project managers collaborates seamlessly to bring ambitious architectural visions to life. From concept development and feasibility
                  studies to meticulous project management and sustainable construction practices, we ensure every aspect of your building project is executed
                  with precision and excellence. By choosing us, you benefit from our proven track record of delivering projects on time and within budget,
                  our dedication to using cutting-edge technologies and materials, and our unwavering focus on creating functional, aesthetically pleasing,
                  and environmentally sustainable buildings that stand the test of time. Partner with us to transform your architectural dreams into tangible
                  realities that enhance communities and inspire future generations.
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
                <p>Our Commitment</p>
                <h2>Excellence in Construction</h2>
              </div>
              <div className="building-text">
                <p>
                  At SN CONSTRUCTION, our commitment to excellence drives us to deliver projects that not only meet but exceed client expectations. We understand
                  the importance of quality, timelines, and budget adherence, and strive to provide construction solutions that stand out for their durability and design.
                </p>
                <p>
                  Our approach integrates sustainable practices with innovative technologies to create buildings that are not only functional and beautiful but also environmentally responsible.
                  Join us in shaping the future of construction with our reliable and top-tier building services.
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
    </>
  );
}
