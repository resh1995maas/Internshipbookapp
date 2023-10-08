
const express = require('express');
const router = require("express").Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config();
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT;

// Connect to MongoDB
//mongoose.connect('mongodb://localhost/bookstore_db', { useNewUrlParser: true, useUnifiedTopology: true });


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.mongodb_url);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  



// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define routes for handling books, users, and authentication (implement authentication middleware)
const booksRoutes = require('./Routes/book');
const usersRoutes = require('./Routes/user');
const authRoutes = require('./routes/auth');



// Requiring all routes
const userApi = require("./Routes/user");
const bookApi = require("./Routes/book");

app.use('/api/books', userApi);
app.use('/api/users', bookApi);
app.use('/api/auth', authRoutes);


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Book Store API');
  });
  

  connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
});