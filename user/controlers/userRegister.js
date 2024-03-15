const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userRegister = async (req, res) => {
  console.log(req.body);
  const { name, email, password, type, shopname, phone, address, bank, branch, acc } = req.body;
  const userModel = mongoose.model('User');
  console.log("run")
  if (!name || !email || !password || !type || !shopname || !phone || !address || !bank || !branch || !acc) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please enter all fields',
    });
  }

  console.log("run2")

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        status: 'fail',
        message: 'User already exists',
      });
    }
    console.log("run2")
    const hash = await bcrypt.hash(password, 10);

    const newData = await userModel.create({
      name: name,
      email: email,
      password: hash,
      type: type,
      shopname: shopname,
      phone: phone,
      address: address,
      bank: bank,
      branch: branch,
      acc: acc

    });


    console.log( 'Your Registration successfully', 'Thank you for registering with us');

    res.status(200).json({
      status: 'success',
      message: 'User registered successfully',
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'fail',
      message: 'Internal Server Error',
    });
  }
};

module.exports = userRegister;