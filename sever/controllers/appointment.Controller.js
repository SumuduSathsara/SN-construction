import Appointment from '../models/Appointment.model.js';

// Controller function to create a new appointment
const createAppointment = async (req, res) => {
    try {
      const appointment = new Appointment(req.body);
      await appointment.save();
      res.status(201).json({ message: 'Appointment saved successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save appointment' });
    }
  };

  