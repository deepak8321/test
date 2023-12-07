const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the user who submitted the form
    ref: 'User', // Reference to the User model
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  address: {
    type: String
  },
  files: [{
    type: String // This can be the path to the uploaded files
    // You might want to store file details or references based on your file storage approach
  }],
  geolocation: {
    type: String // Storing geolocation coordinates as a string for simplicity
    // You might consider using a separate schema or more complex structure for geolocation
  },
  selectedOptions: [{
    type: String // Storing selected options as an array of strings
    // Adjust this according to the type of options you're storing
  }],
  submissionDate: {
    type: Date,
    default: Date.now // Automatically set the submission date to the current date/time
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Submission = mongoose.model('Submission', submissionSchema);
module.exports = Submission;
