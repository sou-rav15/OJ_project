const router= require('express').Router();

const executeCpp = require('../executeCpp.js');
// const executeJava = require('../executeJava.js');
const executeJavaScript = require('../executeJavascript.js');
const executePython = require('../executePython.js');
const generateTestCaseFile = require('../generateTestCaseFile.js');
const  generateTestInputFile = require('../generateTestInputFiles.js');
const TestCases=require('../models/Testcases.js');

router.post('/',async(req,res)=>{
    const {language,code, problem_id: problemId}= await req.body;
    console.log('language->',language,'code->',code,'problem_id->', problemId);

    if(code=== undefined){
        return res.status(500).json({success:false, message:'empty code'})
    }
    const testCases = await TestCases.findOne( { problem_id: problemId });
    // console.log('testcase->', testCases);


    try {
        const filePath =await generateTestCaseFile(language,code);
   // Filepath jha code store hai
   // console.log('filePath is->',filePath)
   const problemid=req.params.id;
   const data = await TestCases.findOne({problem_id:problemId});
//    console.log('fetched data',data);
   // res.json('hey')
//    res.status(200).json(data)
//    const testCases = await TestCases.findOne( { problem_id: problemId });

   TestcaseInput=testCases.input;
   const Output = testCases.expected_output; // Adjust as needed
// console.log('Output is ->',Output)
// console.log('testCasesss is->',testCases);
   // Array to hold the results for each test case
   let results = [];
let i=0;
   for (let inputs of TestcaseInput) {
       const  input =inputs ;
// console.log('input is ->',input);
// inputpath jaha input store hoga
const inputPath = await generateTestInputFile(input);
// Execute the code with the input
const expectedOutput=Output[i];
i=i+1;
// console.log(expectedOutput,i)
       let actualOutput;
       let isAccepted;

       if (language === 'cpp') {
           actualOutput = await executeCpp(filePath, inputPath);
       } else if (language === 'javascript') {
           actualOutput = await executeJavaScript(filePath, input);
       } else if (language === 'python') {
           actualOutput = await executePython(filePath, input);
       }
// console.log('actual output->', actualOutput.trim());
// console.log('actual output->', typeof(actualOutput));
// console.log('type->',typeof(expectedOutput));

if (typeof expectedOutput === 'string'){
actualOutput = actualOutput.replace(/^"|"$/g, '').replace(/\\"$/, '').trim();
isAccepted = actualOutput === expectedOutput;
// isAccepted=actualOutput.trim()===expectedOutput.trim() 

}
else {
actualOutput = actualOutput.trim().split(" ").map(Number);
// console.log('inside else if->',actualOutput);

// Compare actual output with expected output
isAccepted = JSON.stringify(actualOutput) === JSON.stringify(expectedOutput);

   // Compare actual output with expected output

}
//   console.log('actual ouptut here->',actualOutput)
//   console.log('expected ouptut here->',expectedOutput)
// console.log(isAccepted) 
       // Store the result
       results.push({
           i,
           input,
           actualOutput,
        
           expectedOutput,
           status: isAccepted ? 'Accepted' : 'Rejected',
       }); 
       
   }
res.json(results);
   // Send results back to the frontend
 
} catch (error) {
   console.error(error);
   res.status(500).send('Server error');
}

});

router.get('/',(req,res)=>{
    res.json('hey');
})

module.exports=router;