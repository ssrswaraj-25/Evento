const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const contactRoute = require('./routes/contact');


router.post('/', async (req, res) => 
{

  try {
    const { name, email, mobileNumber, heardAbout, eventDescription } = req.body;
    const newContact = new Contact({ name, email, mobileNumber, heardAbout, eventDescription });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
