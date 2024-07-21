const Joi = require('joi');
const { schema } = require('../models/users'); // Assuming this is correctly imported

const registerValidation = (req, res, next) => {
    const Schema = Joi.object({
        type: Joi.string().min(4).invalid('select').required(),
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        mobile: Joi.string().min(10).max(10).required(),
        address: Joi.string().min(10).max(100).required(),
        password: Joi.string().min(4).max(100).required(),
        cpassword: Joi.string().min(4).max(100).required(),
    });

    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error: error.details[0].message });
    }
    next();
}

const loginValidation = (req, res, next) => {
    const Schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
    });

    const { error } = Schema.validate(req.body);
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error: error.details[0].message });
    }
    next();
}

module.exports = {
    registerValidation,
    loginValidation
}
