const mongoose = require("mongoose");
const express = require('express');
const route = express.Router()
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    gender: String,
    status: String,
});
onst Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;