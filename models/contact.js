const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const contactSchema = new Schema({
  //   userid: {
  //   type: String,
  //   postedBy: {type: Schema.Types.ObjectId, ref: 'User'}
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
  }

  
});

const Contact = mongoose.model("Contact", contactSchema);


module.exports = Contact;
