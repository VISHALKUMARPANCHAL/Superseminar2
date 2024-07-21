const { register, login } = require('../controllers/authcontroller');
const { registerValidation, loginValidation } = require('../middleware/authvalidation');

const router = require('express').Router()

router.post('/login', loginValidation, login);
router.post('/register', registerValidation, register);

module.exports = router;