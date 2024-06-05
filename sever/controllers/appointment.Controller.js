// controllers/appointmentController.js
import Appointment from '../models/Appointment.model.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sathsarasandunnayke@gmail.com', // Replace with your email
    pass: 'Sumu@159', // Replace with your password or use environment variables
  },
});

const generateZoomLink = () => {
  // Implement your logic to generate a Zoom link
  return 'https://zoom.us/125489675'; // Example link, replace with actual logic
};

export const createAppointment = async (req, res) => {
  try {
    const {
      name,
      email,
      nic,
      phone,
      city,
      date,
      appointmentType,
      payment, // Assuming payment information is also sent
    } = req.body;

    const newAppointment = new Appointment({
      name,
      email,
      nic,
      phone,
      city,
      date,
      appointmentType,
      paymentStatus: 'Paid', // Set initial status
    });

    await newAppointment.save();

    const zoomLink = generateZoomLink();

    newAppointment.zoomLink = zoomLink;
    await newAppointment.save();

    const mailOptions = {
      from: 'sathsarasandunnayke@gmail.com',
      to: email,
      subject: 'Appointment Confirmation',
      html: `Dear ${name},<br/><br/>
        Your appointment is confirmed for ${date}. Here is your Zoom link: <a href="${zoomLink}">${zoomLink}</a>.<br/><br/>
        Regards,<br/>
        Construction Team`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Appointment saved successfully.' });
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).json({ error: 'Error saving appointment.' });
  }
};
