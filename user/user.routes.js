const express = require('express');
const userRouter = express.Router();
const userRegister = require('./controlers/userRegister');
const userLogin = require('./controlers/userLogin');
const ping = require("./controlers/ping")


userRouter.post('/register',userRegister)
userRouter.post('/login',userLogin)
userRouter.get('/ping',ping)


module.exports = userRouter;