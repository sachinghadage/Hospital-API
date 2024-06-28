// controllers/patientController.js

const { Patient } = require('../models/Patient');

const registerPatient = async (req, res) => {
    const { id, phoneNumber, name, age, gender } = req.body;

    try {
        // Check if patient already exists
        let existingPatient = await Patient.findOne({ phoneNumber });

        if (existingPatient) {
            return res.status(400).json({ message: 'Patient already registered with this phone number' });
        }

        // Create new patient
        const newPatient = new Patient({ id, phoneNumber, name, age, gender });
        await newPatient.save();

        res.status(201).json({ message: 'Patient registered successfully', patient: newPatient });
    } catch (error) {
        res.status(500).json({ message: 'Failed to register patient', error: error.message });
    }
};

const getPatient = async (req, res) => {
    const { id } = req.params;

    try {
        // Fetch patient by ID
        const patient = await Patient.findById(id);

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json({ message: 'Patient fetched successfully', patient });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch patient', error: error.message });
    }
};

const getPatientByPhoneNumber = async (req, res) => {
    const { phoneNumber } = req.params;

    try {
        // Fetch patient by phoneNumber
        const patient = await Patient.findOne({ phoneNumber });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json({ message: 'Patient fetched successfully', patient });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch patient', error: error.message });
    }
};
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

        // Assume 'reports' is an array field in Patient schema where reports are stored
        patient.reports.push(newReport);
        await patient.save();

        res.status(201).json({ message: 'Report created successfully', report: newReport });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create report', error: error.message });
    }
};


module.exports = { registerPatient, getPatient, getPatientByPhoneNumber,createReport };
