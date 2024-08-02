const router =require('express').Router();
const TestCase=require('../models/Testcases.js');
// to save test cases in database
router.post('/',async (req,res)=>{
    console.log('here');
    try {
        if(!req.body){
            return res.json({message:'empty '})
        }
    const data=req.body;
    const newTestCase= new TestCase(data);
    const response =await newTestCase.save()
res.status(200).json(response);
} catch (error) {
    console.log(error);
    res.status(200).json({error:"Internal server errro during storing TestCases"})
    
}

});
router.get('/',async(req,res)=>{
    res.json('hey')
    // try {
    //     const data = await TestCase.find();
    //     console.log('fetched data');
    //     res.status(200).json(data)
    // } catch (error) {
    //     console.log('error in findind data')
    // }
})

module.exports=router;
