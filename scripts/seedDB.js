const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/contacts"
);

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/users"
// );
const contactSeed = [
  {
  user: "5e8786ae00caa043a21e0a99",
  name: "John Smith",
  phone: "512-444-3223",
  email: "jsmith@gmail.com"}
  
  ];

    // const userSeed = [
    //   {
    //   username: "johnsmith",      
    //   password: "johnsmith"},
    //   {
    //   username: "sallyjones",  
    //   password: "sallyjones"}];



    //  db.Contact.collection.insertMany(contactSeed)
    // .then(data => {
    //   console.log(data.result.n + " records inserted!");
    //   process.exit(0);
    // })
    // .catch(err => {
    //   console.error(err);
    //   process.exit(1);
    // });

    // db.User.collection.insertMany(userSeed)
    // .then(data => {
    //   console.log(data.result.n + " records inserted!");
    //   process.exit(0);
    // })
    // .catch(err => {
    //   console.error(err);
    //   process.exit(1);
    // });