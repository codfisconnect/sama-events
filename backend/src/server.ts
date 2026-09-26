import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes';
import { errorHandler } from './middleware/errorHandler';
import { connectDatabase } from './config/database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

// Middleware
app.use(cors({
  origin: [CLIENT_ORIGIN, 'http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true,
}));
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Root message
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Sama Events API',
    endpoints: {
      health: '/api/health',
      enquiries: '/api/enquiries (POST, GET)',
    },
  });
});

// Central error handler
app.use(errorHandler);

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Sama Events Backend running on http://localhost:${PORT}`);
  await connectDatabase();
});
