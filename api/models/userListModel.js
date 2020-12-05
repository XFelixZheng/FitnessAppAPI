'use strict';
const mongoose = require('mongoose');

// schema mapping to MongoDB collection "users" in FitnessApp database
const userSchema = new mongoose.Schema({
  username: String,
  firstname: String,
  surname: String,
  birthdate: { type: Date, default: Date.now },
  email: String,
  bodyinfo: {
    height: Number,
    weight: Number,
    bodyfat: Number,
    water: Number,
    bmi: Number,
  },
  profilepicture: String
})

module.exports = mongoose.model('Users', userSchema);
