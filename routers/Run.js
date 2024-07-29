const executeCpp = require('../executeCpp.js');
const generateFile = require('../generateFile.js');

const router= require('express').Router();



router.post('/',async(req,res)=>{
    const {language="cpp",code}= await req.body;
    console.log(req.body);
    if(code=== undefined){
        return res.status(500).json({success:false, message:'empty code'})
    }
    // res.json({language,code});
    try {
        const filePath =await generateFile(language,code)

        const output= await executeCpp(filePath);
        // console.log('output is',filePath)
        res.status(200).json({filePath,output});
    } catch (error) {
        res.status(500).json({"success":false,message:error.message})
        
    }

    

});

module.exports=router;

