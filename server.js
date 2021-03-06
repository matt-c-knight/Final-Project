const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/contacts",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/users",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


app.use(routes);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });