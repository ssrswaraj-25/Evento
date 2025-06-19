const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  heardAbout: { type: String, required: true },
  eventDescription: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;


