const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// Create an instance of the Express application
const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
mongoose.connect("<db_uri>", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Create a Mongoose model for your employee (replace 'Employee' with your desired model name)
const Employee = mongoose.model('Employee', EmployeeSchema);

// Define a route to fetch assigned salary for an employee
app.get('/employee/:employeeId/salary', async(req, res) => {