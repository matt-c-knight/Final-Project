const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const contactSchema = new Schema({
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