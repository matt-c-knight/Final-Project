const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/contacts"
);

const contactSeed = [
    {name: "John Smith",
    phone: 512-444-3223,
    email: "jsmith@gmail.com"},
    {name: "Sally Jones",
    phone: 512-333-2567,
    email: "sjones@aol.com"}]





    db.Contact
    .remove({})
    .then(() => db.Contact.collection.insertMany(contactSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });