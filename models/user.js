const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    contacts : 
      [
      {type: mongoose.Schema.Types.ObjectId, ref:'Contact'}],
      required: false

  
  });

  const User = mongoose.model("User", userSchema);

  module.exports = User;