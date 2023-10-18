// studSchema.js
const mongoose = require("mongoose");

const studSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  contact: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  school: {
    type: String,
  },
  docuLink: {
    type: String
  },
});

const students = mongoose.model("students", studSchema);
module.exports = students;
