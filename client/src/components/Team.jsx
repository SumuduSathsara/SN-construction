import React from 'react'
import myImage3 from '../images/team-2.jpg'
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Team() {
  return (
    <div>
       <div className="team">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Meet Our Engineer</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img">
                                <img className="d-block w-100"src={myImage3} alt="First slide"/>
                                </div>
                                <div className="team-text">
                                    <h2>Adam Phillips</h2>
                                    <p>CEO & Founder</p>
                                </div>
                                <div className="team-social">
                                <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                <img className="d-block w-100"src={myImage3} alt="First slide"/>
                                </div>
                                <div className="team-text">
                                    <h2>Dylan Adams</h2>
                                    <p>Civil Engineer</p>
                                </div>
                                <div className="team-social">
                                <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img">
                                <img className="d-block w-100"src={myImage3} alt="First slide"/>
                                </div>
                                <div className="team-text">
                                    <h2>Jhon Doe</h2>
                                    <p>Interior Designer</p>
                                </div>
                                <div className="team-social">
                                <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img">
                                <img className="d-block w-100"src={myImage3} alt="First slide"/>
                                </div>
                                <div className="team-text">
                                    <h2>Jhon Doe</h2>
                                    <p>Interior Designer</p>
                                </div>
                                <div className="team-social">
                                <a href='#'><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                                <a href='#'><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                        
                        
                       
                    </div>
                </div>
            </div>
            

    </div>

  )
}
