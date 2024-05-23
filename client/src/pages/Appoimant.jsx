import React, { useState } from 'react';
import './Appoimant.css';
import Back from '../components/Back';
import myImage1 from '../images/Renovation (2).jpg';

const Appoimant = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointmentType, setAppointmentType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);

  const bookingOffers = {
    Monday: { morning: 5, evening: 3 },
    Thursday: { morning: 4, evening: 2 },
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedTime(null);
    setShowBookingForm(false);
    setShowPaymentForm(false);
    setAppointmentSubmitted(false);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setShowBookingForm(true);
    setShowPaymentForm(false);
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    if (appointmentType === 'Discuss Ongoing Project') {
      setAppointmentSubmitted(true);
      setShowBookingForm(false);
      setShowPaymentForm(false);
    } else {
      if (appointmentType === 'Create Estimate') {
        setShowPaymentForm(true);
        setShowBookingForm(false);
      } else if (appointmentType === 'Discuss New Project') {
        setShowPaymentForm(true);
        setShowBookingForm(false);
      }
    }
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    setAppointmentSubmitted(true);
    setShowPaymentForm(false);
  };

  const handleClose = () => {
    setShowBookingForm(false);
    setShowPaymentForm(false);
    setAppointmentSubmitted(false);
  };

  return (
    <>
      {/* Back slide */}
      <Back title="appointment" />

      {/* Appointment intro */}
      <div className="appointment wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="appointment-img">
                <img className="d-block w-100" src={myImage1} alt="First slide" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left">
                <p>Schedule Your Construction Consultation</p>
              </div>
              <div className="appointment-text">
                <p>
                  Welcome to our appointment page for scheduling consultations related to our construction services.
                  Here, you can efficiently book appointments with our team of expert engineers to discuss your
                  upcoming projects and receive personalized advice.
                </p>
                <p>
                  When booking your appointment, please note that a deposit of RS.1500 is required to proceed with
                  creating an estimate for your project. This deposit ensures that our team can begin preparing detailed
                  cost estimates and plans tailored to your specific needs. Additionally, a service fee of RS.500 is due
                  upon confirmation of your appointment. This fee ensures that our engineers can dedicate their time and
                  expertise to addressing your specific needs effectively.
                </p>
                <p>
                  Once your appointment is confirmed and both the deposit and fee are received, you will receive a
                  confirmation email along with a Zoom link. This link will allow you to connect virtually with our
                  engineer at the scheduled time. During this session, you can discuss your requirements in detail, ask
                  questions, and receive expert guidance to move your project forward effectively.
                </p>
                <p>
                  Thank you for choosing our construction web application. We're committed to providing you with
                  excellent service and helping you achieve success with your construction endeavors.
                </p>
                <a className="btn" href="">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment form */}
      <div className="appointment-form">
        <h2>Select an Appointment</h2>
        <div>
          <button onClick={() => handleDayClick('Monday')}>Monday</button>
          <button onClick={() => handleDayClick('Thursday')}>Thursday</button>
        </div>
        {selectedDay && (
          <div>
            <h3>{selectedDay}</h3>
            <button onClick={() => handleTimeClick('morning')}>
              Morning (10:00 AM) - {bookingOffers[selectedDay].morning} slots available
            </button>
            <button onClick={() => handleTimeClick('evening')}>
              Evening (5:00 PM) - {bookingOffers[selectedDay].evening} slots available
            </button>
          </div>
        )}
        {showBookingForm && (
          <div className="form-container">
            <h4>
              Booking Form for {selectedDay} - {selectedTime === 'morning' ? 'Morning' : 'Evening'}
            </h4>
            <form onSubmit={handleBookingSubmit}>
              <div>
                <label>Name: </label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Email: </label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label>Phone: </label>
                <input type="tel" name="phone" required />
              </div>
              <div>
                <label>NIC: </label>
                <input type="text" name="nic" required />
              </div>
              <div>
                <label>City: </label>
                <input type="text" name="city" required />
              </div>
              <div>
                <label>Date: </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Type of Appointment: </label>
                <select
                  value={appointmentType}
                  onChange={(e) => setAppointmentType(e.target.value)}
                  required
                >
                  <option value="">Select...</option>
                  <option value="Create Estimate">Create Estimate</option>
                  <option value="Discuss New Project">Discuss New Project</option>
                  <option value="Discuss Ongoing Project">Discuss Ongoing Project</option>
                </select>
              </div>
              <button type="ok">Book Appointment</button>
              <button type="close" onClick={handleClose}>
                Close
              </button>
            </form>
          </div>
        )}
        {showPaymentForm && (
          <div className="form-container">
            <h4>Payment Form for {appointmentType}</h4>
            <form onSubmit={handlePaymentSubmit}>
              <div>
                <label>
                  {appointmentType === 'Create Estimate'
                    ? 'Deposit Amount (RS.1500) - Credit Card Number: '
                    : 'Service Fee (RS.500) - Credit Card Number: '}
                </label>
                <input type="text" name="ccnumber" required />
              </div>
              <div>
                <label>Expiration Date: </label>
                <input type="text" name="ccexp" required />
              </div>
              <div>
                <label>CVV: </label>
                <input type="text" name="cccvv" required />
              </div>
              <button type="ok">Pay</button>
              <button type="close" onClick={handleClose}>
                Close
              </button>
            </form>
          </div>
        )}
        {appointmentSubmitted && (
          <div className="confirmation">
            <h4>Your appointment has been successfully submitted!</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Appoimant;
