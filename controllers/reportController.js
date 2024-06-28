const Report = require('../models/Report');
const { Patient } = require('../models/Patient');

const createReport = async (req, res) => {
    const { phoneNumber } = req.params;  // Extract phone number from request parameters
    const { status, createdBy, date } = req.body;  // Extract report details from request body

    try {
        // Find patient by phone number
        const patient = await Patient.findOne({ phoneNumber });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        // Create new report
        const newReport = {
            status,
            createdBy,
            date
        };

        // Push the new report to the 'reports' array in the patient document
        patient.reports.push(newReport);
        await patient.save();

        res.status(201).json({ message: 'Report created successfully', report: newReport });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create report', error: error.message });
    }
};


const getAllReports = async (req, res) => {
    const { id } = req.params; // Assuming this is the patient ID

    try {
        // Fetch all reports for the patient
        const reports = await Report.find({ patient: id });

        res.json({ message: 'All reports fetched successfully', reports });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch reports', error: error.message });
    }
};

const getReportsByStatus = async (req, res) => {
    const { status } = req.params;

    try {
        // Fetch all reports filtered by status
        const reports = await Report.find({ status });

        res.json({ message: 'Reports fetched successfully', reports });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch reports', error: error.message });
    }
};

module.exports = { createReport, getAllReports, getReportsByStatus };
