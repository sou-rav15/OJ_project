const ensureAuthentication = require('../middleware/dashboardValidation');
const UserCode = require('../models/UserCode');

const router= require('express').Router();



router.get('/',async (req, res) => {
 
   try {
    const data =await UserCode.find();

    console.log('everything is fine');
      return res.json(data);
   } catch (error) {
    console.log('errorrrr');
    
   }
  
});



//code fethcing


router.get('/:userId/:problemId',ensureAuthentication, async (req, res) => {
    const { userId,problemId } = req.params;
  console.log('problem id',problemId,'userid',userId);
  
    try {
      // const problemObjectId = mongoose.Types.ObjectId(problemId);
      // const userObjectId = mongoose.Types.ObjectId(userId);

      const userCode = await UserCode.findOne({ problem_id: problemId, userId: userId });
         if (userCode) {
   
        res.json({ code: userCode.code });
      } else {
        res.json({ code: '' }); // No code found for this user and problem
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch saved code' });
    }
  });

  router.post('/', async (req, res) => {

    console.log('body ',req.body)
    try {
        const { userId, problem_id, code } = req.body;
console.log('userId',userId,'problemId',problem_id,'code',code)
        // Check if code for this user and problem already exists
        let userCode = await UserCode.findOne({ userId, problem_id});
        if (userCode) {
            // If code exists, update it
            userCode.code = code;
            await userCode.save();
        } else {
            // If not, create a new record
            const newUserCode = new UserCode({ userId, problem_id, code });
            await newUserCode.save();
        }

        res.status(200).json({ message: 'Code saved successfully' });
    } catch (error) {
        console.log('Error saving code:', error);
        res.status(500).json({ error: 'Failed to save code' });
    }
});

  

module.exports= router;