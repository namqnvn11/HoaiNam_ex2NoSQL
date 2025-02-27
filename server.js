const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Kết nối database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server đang chạy trên port ${PORT}`)); 