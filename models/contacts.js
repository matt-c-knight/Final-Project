const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/contacts"
);

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  phone: {
    type: Number,
    default: ""
  },
  
  email: {
    type: String,
    default: "",
    unique: true
  },

  
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;