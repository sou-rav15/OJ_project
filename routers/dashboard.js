const router= require('express').Router();

const ensureAuthentication=require('../middleware/dashboardValidation.js');
router.get('/',ensureAuthentication, (req,res)=>{
    res.send("DASHBOARD");
});
module.exports=router;