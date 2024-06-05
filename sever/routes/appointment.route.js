// routes/appointment.route.js

import express from 'express';

import Appointment from '../models/Appointment.model.js';


const router = express.Router();

// POST route to create a new appointment
router.post('/', async (req, res) => {
  try {
    const appointment = new Appointment({
      name: req.body.name,
      email: req.body.email,
      nic: req.body.nic,
      phone: req.body.phone,
      city: req.body.city,
      date: req.body.date,
      appointmentType: req.body.appointmentType,
      ccnumber: req.body.ccnumber,
      ccexp: req.body.ccexp,
      cccvv: req.body.cccvv,
    });

    const savedAppointment = await appointment.save();
    res.json(savedAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router; // Export the router instance
