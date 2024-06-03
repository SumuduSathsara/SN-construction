import express from 'express';
import Appointment from '../models/Appointment.model.js';

const router = express.Router();

// POST /api/appointments - Create a new appointment
router.post('/', async (req, res) => {
    try {
      const appointment = new Appointment(req.body);
      await appointment.save();
      res.status(201).json({ message: 'Appointment saved successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save appointment' });
    }
  });

  export default router;