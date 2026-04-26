require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: true,
}));
app.use(express.json());

// Routes
const itemsRouter = require('./routes/items');
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database:
      mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

app.use('/api/items', itemsRouter);

// Database Connection
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not set');
} else {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB Atlas');
    })
    .catch((err) => console.error('Error connecting to MongoDB:', err));
}
