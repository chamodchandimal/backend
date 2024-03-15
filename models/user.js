const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    require: false
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bank: {
    type: String,
    required: false
  },
  branch: {
    type: String,
    required: false
  },
  acc:{
    type: String,
    required: false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
