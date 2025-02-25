const UserModel = require("../models/users");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { type, name, email, mobile, address, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, please login', success: false });
        }
        const userModel = new UserModel({ type, name, email, mobile, address, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: 'signup successfully',
                success: true
            })
    }
    catch (err) {
        res.status(500)
            .json({
                message: 'internal server error',
                success: false
            })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'User not found';
        const errorMsg2 = 'Worng Password';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg2, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login successfully",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports = {
    register,
    login
}