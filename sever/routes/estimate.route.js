import express from 'express';
import Estimate from '../models/Estimate.model.js';

const router = express.Router();

// Create a new estimate
router.post('/create', async (req, res) => {
    const newEstimate = new Estimate(req.body);
    try {
      const savedEstimate = await newEstimate.save();
      res.status(201).json(savedEstimate);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Get all estimates
  router.get('/', async (req, res) => {
    try {
      const estimates = await Estimate.find();
      res.json(estimates);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export default router;