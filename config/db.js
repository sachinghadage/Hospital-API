const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // Remove deprecated options
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add new options for the MongoDB Node.js driver 4.0.0+
      // These options are optional and shown here for reference
      // retryWrites: true,
      // w: 'majority',
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
