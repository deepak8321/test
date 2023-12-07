const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // You might want to add a custom validation for email format
    // For example:
    // validate: {
    //   validator: (email) => {
    //     // Implement your email format validation logic
    //   },
    //   message: 'Invalid email format'
    // }
  },
  password: {
    type: String,
    required: true
  },
  // Add any other fields related to the user model as needed
  // For example:
  // phoneNumber: {
  //   type: String
  // },
  // address: {
  //   type: String
  // },
  // ... other fields
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);
module.exports = User;
