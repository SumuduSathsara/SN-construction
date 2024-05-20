
import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { firstname, lastname, email, mobile, message } = req.body;
    // Validate fields here if needed
    
    const newMessage = new Message({
      firstname,
      lastname,
      email,
      mobile,
      message,
    });
    
    await newMessage.save();
    
    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    next(err);
  }
});

export default router;
