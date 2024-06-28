const jwt = require('jsonwebtoken');

// Mock user database
const doctors = [{ username: 'drsmith', password: 'password123' }];

const registerDoctor = (req, res) => {
    const { username, password } = req.body;
    // Registration logic (e.g., save to database)
    doctors.push({ username, password });
    res.json({ message: 'Doctor registered successfully', doctor: { username } });
};

const loginDoctor = (req, res) => {
    const { username, password } = req.body;
    const doctor = doctors.find(doc => doc.username === username && doc.password === password);

    if (doctor) {
        // Generate JWT token
        const token = jwt.sign({ username: doctor.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Doctor logged in successfully', token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

module.exports = { registerDoctor, loginDoctor };
