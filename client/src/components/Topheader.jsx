import React from "react";
import "./Top_Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import myLogo from "../images/logo1.png";

export default function Topheader() {
  return (
    <>
      {/*Top_Header */}
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div class="logo">
                <a href="index.html">
                  <img src={myLogo} alt="snconstraction" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 d-none d-lg-block">
              <div className="row">
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <FontAwesomeIcon icon={faBusinessTime} />
                    </div>
                    <div className="top-bar-text">
                      <h3>Opening Hour</h3>
                      <p>Mon - Fri, 8:00 - 9:00</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="top-bar-text">
                      <h3>Call Us</h3>
                      <p>+940779975494</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="top-bar-text">
                      <h3>Email Us</h3>
                      <p>snconstruction177@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
