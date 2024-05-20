import React from 'react'
import Back from '../components/Back'
import myImage1 from '../images/Renovation (2).jpg'
import './House_Renovation.css'

export default function HouseRenovation() {
  return (
    <div>
      
      <Back title="House Renovation"/>
         


         <div className="about wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                            <img className="d-block w-100"src={myImage1} alt="First slide"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>Welcome to SN CONSTRUCTION Renovations</p>
                                <h2>Crafting Dream Home</h2>
                            </div>
                            <div className="about-text">
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

         
    </div>
  )
}
