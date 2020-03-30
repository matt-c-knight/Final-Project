const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const contactSchema = new Schema({
  // username: {
  //   type: String,
  //   postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  // },
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
  // username: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // }

  
});

const Contact = mongoose.model("Contact", contactSchema);


module.exports = Contact;
