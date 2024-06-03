import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import estimateRoutes from './routes/estimate.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

// Database connect
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

// Server connect
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use(express.json());
app.use(cookieParser());

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});

// Routes connect
app.use('/sever/user', userRoutes);
app.use('/sever/auth', authRoutes);
app.use('/sever/message', messageRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
