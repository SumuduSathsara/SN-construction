import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenRuler,faPeopleGroup,faPersonDigging,faScrewdriverWrench,} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

import myImage1 from "../images/image3.jpg";
import myImage2 from "../images/image4.jpg";
import myImage3 from "../images/image5.jpg";
import myImage4 from "../images/image6.jpg";
import myImage5 from "../images/se_building.jpg";
import myImage6 from "../images/Home.jpg";
import myImage7 from "../images/design1.jpg";
import myImage8 from "../images/maintain.jpg";

import Carousel from "react-bootstrap/Carousel";


export default function Home() {
  return (
    <div>
      
      <Carousel data-bs-theme="light">
        <Carousel.Item>
          <img className="d-block w-100" src={myImage1} alt="First slide" />
          <Carousel.Caption>
            <p class="animated fadeInRight">Professional Builder</p>
            <h1 class="animated fadeInLeft">We Build Your Home</h1>
            <a class="btn animated fadeInUp" href="#">
              Estimate
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={myImage2} alt="Second slide" />
          <Carousel.Caption>
            <p class="animated fadeInRight">We Are Designe</p>
            <h1 class="animated fadeInLeft">For Your Dream Home</h1>
            <a class="btn animated fadeInUp" href="#">
              Estimate
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={myImage3} alt="Third slide" />
          <Carousel.Caption>
            <p class="animated fadeInRight">We Are Professional</p>
            <h1 class="animated fadeInLeft">For Your Dream Project</h1>
            <a class="btn animated fadeInUp" href="#">
              Estimate
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="Reputation">
        <div className="container">
          <div className="section-header text-center">
            <h1>Our Reputation</h1>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="box">
                <div className="Reputation-text">
                  <div className="icon  text-center">
                    <FontAwesomeIcon icon={faPersonDigging} />
                  </div>

                  <h2>Best Service</h2>
                  <p>
                    {" "}
                    Our dedication to excellence in the construction industry is
                    centered on precision, reliability, and client satisfaction,
                    aiming to establish an enduring legacy.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="box">
                <div className="Reputation-text">
                  <div className="icon  text-center">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                  </div>

                  <h2>Expert Worker</h2>
                  <p>
                    {" "}
                    Our team of skilled professionals consistently deliver
                    exceptional performance, accuracy and dedication, exceeding
                    customer expectations.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="box">
                <div className="Reputation-text">
                  <div className="icon  text-center">
                    <FontAwesomeIcon icon={faPenRuler} />
                  </div>

                  <h2>Best Design</h2>
                  <p>
                    A label promoting innovation, creativity, and excellence in
                    design, delivered by a dedicated team of professionals who
                    redefine standards in the field.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="box">
                <div className="Reputation-text">
                  <div className="icon  text-center">
                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                  </div>

                  <h2>ConstructCraft Kit</h2>
                  <p>
                    A comprehensive construction toolkit, encompassing machinery
                    and scaffolding, aimed at delivering exceptional
                    construction solutions and fostering industry trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="about-img">
                <img src={myImage4} alt="Second slide" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left">
                <p>Welcome to SN CONSTRUCTION</p>
                <h2>31 Years Experience</h2>
              </div>
              <div className="about-text">
                <p>
                  At SN Construction, we take pride in our 31 years of
                  unwavering commitment to delivering exceptional construction
                  services. Since our establishment, we have been at the
                  forefront of the industry, shaping spaces that stand the test
                  of time.
                </p>
                <p>
                  For over three decades, SN Construction has been a trusted
                  name synonymous with quality craftsmanship, innovation, and
                  reliability. Our journey began in 1993, and since then, we
                  have successfully completed a diverse range of projects, from
                  residential and commercial buildings to infrastructure
                  developments.
                </p>
                <a className="btn" href="">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fact">
        <div className="container-fluid">
          <div className="row counters">
            <div className="col-md-6 fact-left wow slideInLeft">
              <div className="row">
                <div className="col-6">
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">110</h2>
                    <p>Expert Workers</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">385</h2>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 fact-right wow slideInRight">
              <div className="row">
                <div className="col-6">
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">495</h2>
                    <p>Completed Projects</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="fact-text">
                    <h2 data-toggle="counter-up">190</h2>
                    <p>Running Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Service">
        <div className="container">
          <div className="section-header text-center">
            <h1>Our Service</h1>
          </div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="Service-item">
                <div className="Service-img">
                  <img
                    className="d-block w-100"
                    src={myImage5}
                    alt="Building Construction"
                  />
                </div>
                <div className="Service-text">
                  <h2>Building Construction</h2>
                  <p>
                    Foundation Construction,Enclosure and Roofing,Interior
                    Finishing,Final Inspection and Occupancy
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="Service-item">
                <div className="Service-img">
                  <img
                    className="d-block w-100"
                    src={myImage6}
                    alt="House Renovation"
                  />
                </div>
                <div className="Service-text">
                  <h2>House Renovation</h2>
                  <p>
                    Structural Modifications,Interior and Exterior
                    Upgrades,Cosmetic Enhancements
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="Service-item">
                <div className="Service-img">
                  <img
                    className="d-block w-100"
                    src={myImage7}
                    alt="Architecture Design"
                  />
                </div>
                <div className="Service-text">
                  <h2>Architecture Design</h2>
                  <p>
                    {" "}
                    Site Analysis,Structural Integrity,Materials and
                    Construction,Aesthetic and Cultural Considerations
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="Service-item">
                <div className="Service-img">
                  <img
                    className="d-block w-100"
                    src={myImage8}
                    alt="Building Construction"
                  />
                </div>
                <div className="Service-text">
                  <h2>Interior Design</h2>
                  <p>
                    Space Planning,Color and Material Selection,Furniture and
                    Fixture Selection,Lighting Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
