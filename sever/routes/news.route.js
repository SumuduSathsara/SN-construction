import express from 'express';
import News from '../models/News.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { title, content } = req.body;
    try {
      const newNews = new News({ title, content });
      await newNews.save();
      res.status(201).json(newNews);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  router. get('/', async (req, res) => {
    try {
      const news = await News.find().sort({ date: -1 }); // Fetch news sorted by date descending
      res.json(news);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

export default router;