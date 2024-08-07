const executeCpp = require('../executeCpp.js');
const executeJava = require('../executeJava.js');
const executeJavaScript = require('../executeJavascript.js');
const executePython = require('../executePython.js');
const generateFile = require('../generateFile.js');
const { generateInputFile } = require('../generateInputFile.js');

const router= require('express').Router();



router.post('/',async(req,res)=>{
    console.log(req.body)
    const {language,code,input}= await req.body;
    console.log('language is ',language);
    let output;
    if(code=== undefined){
        return res.status(500).json({success:false, message:'empty code'})
    }
    // res.json({language,code});
    try {
        const filePath =await generateFile(language,code);
        const inputPath = await generateInputFile(input);

if(language=== 'cpp'){
    console.log('cpp')
     output= await executeCpp(filePath,inputPath);
     console.log(output);
}
     else if(language==='js')  {
        console.log('js');
        output= await executeJavaScript(filePath,inputPath);
     }
       
     else if(language==='py')  {
        console.log('py');
        output= await executePython(filePath,inputPath);
     }
       
     else if(language==='java')  {
        console.log('java');
        output= await executeJava(filePath,inputPath);
     }
       
     // console.log('output is',filePath)
        res.status(200).json({filePath,inputPath,output});
    } catch (error) {
        res.status(500).json({error:error})
        
    }

    

});

module.exports=router;

