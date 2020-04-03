const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const contactSchema = new Schema({
  
  name: {
    type: String,
    required: true
  },
  
  phone: {
    type: String,
    default: ""
  },
  
  email: {
    type: String,
    default: "",
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
}

  
});

const Contact = mongoose.model("Contact", contactSchema);


module.exports = Contact;
