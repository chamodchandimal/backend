const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const userModel = mongoose.model("User");

    if (!email || !password) {
        return res.status(400).json({
            status: "fail",
            message: "Please enter all fields"
        });
    }

    try {
        const User = await userModel.findOne({ email: email });
        if (!User) {
            return res.status(400).json({
                status: "fail",
                message: "User does not exist"
            });
        }

        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch) {
            return res.status(400).json({
                status: "fail",
                message: "Invalid Credentials"
            });
        }


        const _data = {
            name: User.name,
            email: User.email,
            type:User.type
        }
        console.log("okkk")
        res.status(200).json({
            status: "success",
            message: "User logged in successfully",
            data:User.name,
            type:User.type
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "fail",
            message: "Internal Server Error"
        });
    }
}

module.exports = userLogin;