import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import Validation from './Validation'
import Back from '../components/Back'







export default function Contact() {
    const [values,setValues]=useState({
        firstname:'',
        lastname:'',
        email:'',
        mobile:'',
        message:''

    })
    const [errors,setErrors]= useState({})
    function handleInput(event){
        const newObj ={...values,[event.target.name]: event.target.value}
        setValues(newObj)
        
    }

    function handleValidation(event){
        event.preventDefault(); 
        setErrors(Validation(values));
    }


   const submit = () => {
  fetch('http://localhost:3001/sever/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values), // Ensure values contains firstname, lastname, email, mobile, and message
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message); // Alert success message from backend
      // Optionally, clear form fields after successful submission:
      setValues({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        message: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    });
};

  return (
    <div>
       
         <Back title="Contact us"/>

        
          

      <div className='contactus'>
        <div className='title'>
            <h2>Get in Touch</h2>
        </div>
        <div className='box'>
           
            <div className='contact form'>
            <h3>Send a Message</h3>
            <form onSubmit={handleValidation}>
                <div className='forbox'>
                    <div className='row50'>
                        <div className='inputBox'>
                            <span>First Name</span>
                            <input type='text' placeholder='John' name='firstname' value={values.firstname} onChange={handleInput}/>
                            {errors.firstname && <p style={{color:"red"}}>{errors.firstname}</p>}
                        </div>

                        <div className='inputBox'>
                            <span>Last Name</span>
                            <input type='text' placeholder='Doe' name='lastname' value={values.lastname} onChange={handleInput}/>
                            {errors.lastname && <p style={{color:"red"}}>{errors.lastname}</p>}
                        </div>
                    </div>
                    <div className='row50'>
                        <div className='inputBox'>
                            <span>Email</span>
                            <input type='text' placeholder='johndoe@email.com' name='email' value={values.email} onChange={handleInput}/>
                            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                        </div>
                        <div className='inputBox'>
                            <span>Mobile</span>
                            <input type='text' placeholder='+940775584898' name='mobile' value={values.mobile} onChange={handleInput}/>
                            {errors.mobile && <p style={{color:"red"}}>{errors.mobile}</p>}
                        </div>
                    </div>
                    <div className='row100'>
                        <div className='inputBox'>
                            <span>Message</span>
                            <textarea placeholder='Write your message here....' name='message' value={values.message} onChange={handleInput}></textarea>
                            {errors.message && <p style={{color:"red"}}>{errors.message}</p>}
                        </div>
                    </div>
                    <div className='row100'>
                        <div className='inputBox'>
                            <input type='Submit' value="Send" onClick={submit}/>
                            
                        </div>
                    </div>

                </div>
            </form>
            </div>
           
            <div className='contact info'>
                <h3>Contact Info</h3>
                <div className='infoBox'>
                    <div>
                        <span><FontAwesomeIcon icon={faLocationDot} /></span>
                        <p>240/A,Moragoda,Gampaha<br/>Sri Lanka</p>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                      <a href='#'>snconstruction177@gmail.com</a>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faPhone} /></span>
                       <a href='#'>+940779975494</a>
                    </div>
                    <ul className='sci'>
                        <li><a href='#'><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href='#'><FontAwesomeIcon icon={faInstagram} /></a></li>
                    </ul>
                </div>
               
                
            </div>
            <div className='contact map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4476610372285!2d79.
            99278157381238!3d7.073983692928759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x3ae2fd4136cfe27b%3A0x124873ff8febead7!2sSN%20Construction!5e0!3m2!1sen!2slk!4v1711904532967!5m2!1sen!2slk"
            
             allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Responsive Google Map"></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}
