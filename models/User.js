// Import the required modules
const mongoose = require('mongoose');

// Define a Mongoose schema for User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose model for User
const User = mongoose.model('User', userSchema);

// Export the User model to be used in other parts of the application
module.exports = User;


