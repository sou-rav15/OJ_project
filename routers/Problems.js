
const router= require('express').Router();
const Problems=require('../models/Problems.js');

router.post('/',async (req,res)=>{
    try {
    const data=req.body;
    const newProblem= new Problems(data);
    const response =await newProblem.save()
res.status(200).json(response);
} catch (error) {
    console.log(error);
    res.status(200).json({error:"Internal server errro during storing problens"})
    
}

});
router.get('/',async(req,res)=>{
    try {
        const data = await Problems.find();
        console.log('fetched data');
        res.status(200).json(data)
    } catch (error) {
        console.log('error in findind data')
    }
})

module.exports=router;
