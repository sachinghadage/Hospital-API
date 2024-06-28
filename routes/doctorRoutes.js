// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const { registerDoctor, loginDoctor } = require('../controllers/doctorController');

// Register and login routes
router.post('/register', registerDoctor);
router.post('/login', loginDoctor);

module.exports = router;
