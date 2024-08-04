
const router= require('express').Router();
const Problems=require('../models/Problems.js');
const TestCase = require('../models/Testcases.js');

router.post('/',async (req,res)=>{
    try {
    const data=req.body;
    const newProblem= new Problems(data);
    const response =await newProblem.save();
const ProblemId=newProblem._id;
console.log('problem id isss->',ProblemId);

    const newTestcase= TestCase({problem_id:ProblemId});
    await newTestcase.save();
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
});
router.get('/:id', async (req, res) => {
    try {
        const problemId = req.params.id;
        const data = await Problems.findById(problemId);

        if (!data) {
            return res.status(404).json({ message: 'Problem not found' });
        }

        console.log('Fetched data');
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in finding data', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// router.put('/problems/:id', async (req, res) => {
//     try {
//         const updatedProblem = await Problems.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true, runValidators: true }
//         );
//         if (!updatedProblem) {
//             return res.status(404).json({ message: 'Problem not found' });
//         }
//         res.json(updatedProblem);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


router.put('/:id', async (req, res) => {
    try {
        const problemId = req.params.id;
        const updatedData = req.body;
        
        const updatedProblem = await Problems.findByIdAndUpdate(problemId, updatedData, {
            new: true, // Returns the updated document
            runValidators: true, // Ensures the updated data conforms to the model's schema
        });

        if (!updatedProblem) {
            return res.status(404).json({ error: "Problem not found" });
        }

        res.status(200).json(updatedProblem);
    } catch (error) {
        console.log('Error updating problem', error);
        res.status(500).json({ error: "Internal server error during updating problem" });
    }
});


module.exports=router;
