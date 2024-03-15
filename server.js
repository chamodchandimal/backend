const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./user/user.routes');
const cors = require('cors');
require('dotenv').config();



const app = express();
app.use(cors());

// for parsing application/json
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

// Models
require('./models/user');


// Middlewares
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/user', userRouter);


  app.all('*', (req, res, next) => {
    res.status(404).json({
      status: 'fail',
      message: '404 not found',
    });
  });

// Define routes or middleware as needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


