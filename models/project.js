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
// Create a Mongoose schema for your project model (replace <project_schema> with your actual schema)
const ProjectSchema = new mongoose.Schema( < project_schema > );

// Create a Mongoose model for your project (replace 'Project' with your desired model name)
const Project = mongoose.model('Project', ProjectSchema);
// Define a route to fetch projects assigned to an employee
app.get('/projects/:employeeId', async(req, res) => {
    try {
        const employeeId = req.params.employeeId;
        // Fetch projects assigned to the specified employee from the database
        const assignedProjects = await Project.find({ assignedTo: employeeId });

        if (assignedProjects.length === 0) {
            return res.status(404).json({ error: 'No projects assigned to this employee' });
        }
        res.json(assignedProjects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});