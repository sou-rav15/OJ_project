const router= require('express').Router();

const { signupValidation } = require('../middleware/signupvalidation.js');

const signup =require('../controllers/signupControllers.js')

// router.post('/login',(req,res)=>{
//     res.send('login succes')
// })
router.post('/', signupValidation,signup)

module.exports= router;