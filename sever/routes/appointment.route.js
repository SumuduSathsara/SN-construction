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
      time: req.body.time,
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

// GET route to fetch all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET route to fetch a single appointment by ID
router.get('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT route to update an appointment by ID
router.put('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE route to delete an appointment by ID
router.delete('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
