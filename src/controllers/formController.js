const Submission = require('../models/Submission');

exports.submitForm = async (req, res) => {
  try {
    const { name, email, phoneNumber, address, files, geolocation, selectedOptions } = req.body;

    // Create a new submission
    const newSubmission = new Submission({
      name,
      email,
      phoneNumber,
      address,
      files,
      geolocation,
      selectedOptions,
      submissionDate: new Date(), // Record submission date
    });

    // Save the submission to the database
    await newSubmission.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
