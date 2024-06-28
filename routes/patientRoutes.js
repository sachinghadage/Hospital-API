// routes/patientRoutes.js

const express = require('express');
const { registerPatient, getPatientByPhoneNumber } = require('../controllers/patientController');
const { createReport } = require('../controllers/reportController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

// Route to register a new patient
router.post('/register', registerPatient);

// Route to fetch a patient by phone number
router.get('/phone/:phoneNumber', protect, getPatientByPhoneNumber);

// Route to create a report for a specific patient using their phone number
router.post('/phone/:phoneNumber/create_report', protect, createReport);

module.exports = router;
