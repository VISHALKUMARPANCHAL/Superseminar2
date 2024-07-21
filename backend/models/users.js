const { required } = require('joi');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

})

const UserModel = mongoose.model("users", UsersSchema)
module.exports = UserModel