// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// Create an instance of the Express application
const app = express();
// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
// Connect to your MongoDB (replace <db_uri> with your actual MongoDB URI)
mongoose.connect("<db_uri>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
