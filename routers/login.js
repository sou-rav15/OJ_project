const { loginValidation } = require('../middleware/signupvalidation');

const router= require('express').Router();

const login =require('../controllers/logincontroller.js')
router.post('/',loginValidation, login);
module.exports=router;