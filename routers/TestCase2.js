const router =require('express').Router();
// const TestCase=require('../models/Testcases.js');
const TestCase2 = require('../models/Testcases2.js');
// to save test cases in database
router.post('/',async (req,res)=>{
    console.log('here');
    try {
        if(!req.body){
            return res.json({message:'empty '})
        }
    const data=req.body;
    const newTestCase= new TestCase2(data);
    const response =await newTestCase.save()
res.status(200).json(response);
} catch (error) {
    console.log(error);
    res.status(200).json({error:"Internal server errro during storing TestCases"})
    
}

});
router.get('/',async(req,res)=>{
    res.json('hey')
    try {
        const problemid=req.params.id;
        const data = await TestCase2.findOne({problem_id:problemid});
        console.log('fetched data');
        res.status(200).json(data)
    } catch (error) {
        console.log('error in findind data')
    }
});
router.get('/:id',async(req,res)=>{
    // res.json('hey')
    try {
        const problemid=req.params.id;
        const data = await TestCase2.findOne({problem_id:problemid});
        console.log('fetched data');
        res.status(200).json(data)
    } catch (error) {
        console.log('error in findind data')
    }
});


// src/routes/testCases.js


//Update a test case
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { input, expected_output } = req.body;
console.log('req.body',req.body)
        // Find the test case by ID and update it
        const updatedTestCase = await TestCase2.findOneAndUpdate(
           {problem_id:id},
            { input, expected_output },
            { new: true, runValidators: true }
        );

        if (!updatedTestCase) {
            return res.status(404).json({ message: 'Test case not found' });
        }

        res.status(200).json(updatedTestCase);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error during updating test case' });
    }
});

  
// router.put('/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { newInputs, newExpectedOutputs } = req.body;
  
//       // Validate incoming data
//       if (!Array.isArray(newInputs) || !Array.isArray(newExpectedOutputs)) {
//         return res.status(400).json({ error: 'Invalid input or expected output format' });
//       }
  
//       // Find the problem document by ID and update it
//       const updatedProblem = await Problem.findOneAndUpdate(
//         {problem_id:id},
//         {
//           $push: {
//             input: { $each: newInputs },  // Add new inputs
//             expected_output: { $each: newExpectedOutputs }  // Add new expected outputs
//           }
//         },
//         { new: true, runValidators: true } // Return the updated document and validate
//       );
  
//       if (!updatedProblem) {
//         return res.status(404).json({ error: 'Problem not found' });
//       }
  
//       res.status(200).json(updatedProblem);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error during updating problem' });
//     }
//   });
  




module.exports=router;
