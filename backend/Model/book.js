const mongoose = require('mongoose');
const router = require("express").Router();

const bookSchema = mongoose.Schema({
  title: {
    type:String,
    required:true,
  },
  author:{
    type: String,
    required:true,
  },
  publicationYear:{
    type: Number,
    required:true
  },

  genre: {
    type:String,
    required:true
  },
  ISBN: {
    type:String,
    required:true
  }
  // Add more fields as needed
});

const bookData = mongoose.model('book', bookSchema);
module.exports = bookData;
