/ Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // If you're using MongoDB\
// Create an instance of the Express application
const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());