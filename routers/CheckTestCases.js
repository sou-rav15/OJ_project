const router= require('express').Router();

const executeCpp = require('../executeCpp.js');
// const executeJava = require('../executeJava.js');
const executeJavaScript = require('../executeJavascript.js');
const executePython = require('../executePython.js');
const generateTestCaseFile = require('../generateTestCaseFile.js');
const  generateTestInputFile = require('../generateTestInputFiles.js');
const TestCases=require('../models/Testcases.js');




 
 

    router.post('/', async (req, res) => {

        // console.log('data is->',req.body)
    const {language,code, problem_id: problemId}= await req.body;
    // console.log('language is ',language,'problemid->',req.body.problem_id);
  
    if(code=== undefined){
        return res.status(500).json({success:false, message:'empty code'})
    }
        // const { code, language, problemId } = req.body;
    
        try {
                 const filePath =await generateTestCaseFile(language,code);
            // Filepath jha code store hai
            // console.log('filePath is->',filePath)
            const testCases = await TestCases.find( { problem_id: problemId });

            TestcaseInput=testCases[0].input;
            const Output = testCases[0].expected_output; // Adjust as needed
// console.log('Output is ->',Output)
    // console.log('testCase is->',testCases);
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
        // actualOutput = actualOutput.substring(1, actualOutput.length - 3); // Removes the leading and trailing quotes, \r\n


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
    console.log(isAccepted) 
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
    
    module.exports = router;

// });

// module.exports=router;

