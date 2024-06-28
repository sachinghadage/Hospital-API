// routes/reportRoutes.js

const express = require('express');
const { getReportsByStatus } = require('../controllers/reportController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:status', protect, getReportsByStatus);

module.exports = router;
