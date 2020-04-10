const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/contacts"
);


const contactSeed = [
  {
  user: "5e8786ae00caa043a21e0a99",
  name: "John Smith",
  phone: "512-444-3223",
  email: "jsmith@gmail.com"}
  
  ];

 