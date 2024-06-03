import express from 'express';
import Payment from '../models/Payment.model.js';
import Appointment from '../models/Appointment.model.js';

const router = express.Router();

// POST /api/payments - Create a new payment and link to appointment
router.post('/', async (req, res) => {
    try {
      const payment = new Payment(req.body);
      await payment.save();
  
      const appointmentId = req.body.appointmentId;
      await Appointment.findByIdAndUpdate(appointmentId, { $set: { paymentId: payment._id } });
  
      res.status(201).json({ message: 'Payment saved successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save payment' });
    }
  });

  export default router;