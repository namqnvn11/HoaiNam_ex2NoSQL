const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  grades: {
    Math: Number,
    Marketing: Number
  }
});

module.exports = mongoose.model('Student', studentSchema); 