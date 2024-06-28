// app.js

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const doctorsRouter = require('./routes/doctorRoutes');
const patientsRouter = require('./routes/patientRoutes');
const reportsRouter = require('./routes/reportRoutes');

dotenv.config();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/doctors', doctorsRouter);
app.use('/api/patients', patientsRouter);
app.use('/api/reports', reportsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
