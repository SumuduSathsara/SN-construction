import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin,faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope, faMapMarkerAlt, faPhoneAlt ,faBusinessTime, faTShirt} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div>
      <div className="footer wow fadeIn" data-wow-delay="0.3s">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-contact">
                                <h2>Office Contact</h2>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} />240/A,Moragoda,Gampaha</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} />+940779975494</p>
                                <p><FontAwesomeIcon icon={faEnvelope} />snconstruction177@gmail.com</p>
                                <div className="footer-social">
                                
                                    <a href="https://facebook.com"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href="https://facebook.com"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://facebook.com"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="https://facebook.com"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>Services Areas</h2>
                                <a href="#">Building Construction</a>
                                <a href="">House Renovation</a>
                                <a href="">Architecture Design</a>
                                <a href="">Interior Design</a>
                                <a href="">Painting</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>Useful Pages</h2>
                                <a href="">About Us</a>
                                <a href="">Contact Us</a>
                                <a href="">Our Team</a>
                                <a href="">Projects</a>
                              
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="newsletter">
                                <h2>Newsletter</h2>
                                <p>
                                    Joing with us
                                </p>
                                <div className="form">
                                    
                                    <input className="form-control" placeholder="Email here"/>
                                    
                                    <button className="btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-menu">
                    <div className="f-menu">
                        <a href="">Terms of use</a>
                        <a href="">Privacy policy</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; <a href="#">SN CONSTRUCTION</a>, All Right Reserved.</p>
                        </div>
						
						
                        <div className="col-md-6">
                            <p>Designed By <a href="#">Copyright 2024 - I.S.S.Sadunnayaka.</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>
  )
}
