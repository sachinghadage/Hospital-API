const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    reports: [{
        status: { type: String, required: true },
        createdBy: { type: String, required: true },
        date: { type: Date, default: Date.now }
    }]
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = { Patient };
