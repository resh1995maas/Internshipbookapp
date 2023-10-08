const mongoose = require('mongoose');
const router = require("express").Router();

const userSchema = mongoose.Schema({
  username: {
    type:String,
    required:true
  },
  password:{
    type: String,
    required:true
  }
  
});

const userData = mongoose.model('User', userSchema);
module.exports = userData;
