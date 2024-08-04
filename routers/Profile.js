const Profile = require('../models/Profile');
const User = require('../models/user');

const router =require('express').Router();


router.get('/',async(req,res)=>{
    const user = await Profile.find();
res.json({message:'hey',user})
})


router.get('/:id', async (req, res) => {
    try {
        const userID = req.params.id;
        const data = await Profile.findOne({userId:userID});

        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }

        // console.log('Fetched data',data);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in finding data', error);
        res.status(500).json({ message: 'Server error' });
    }
});

//update user

router.put('/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const updatedData = req.body;
        
        const updatedProfile = await Profile.findOneAndUpdate(   { username: username }, updatedData, {
            new: true, // Returns the updated document
            runValidators: true, // Ensures the updated data conforms to the model's schema
        });

        if (!updatedProfile) {
            return res.status(404).json({ error: "user not found" });
        }
// console.log(updatedProfile)
        res.status(200).json(updatedProfile);
    } catch (error) {
        console.log('Error updating user', error);
        res.status(500).json({ error: "Internal server error during updating profile" });
    }
});


//udating after user submit the code...



router.put('/:userId/submit', async (req, res) => {
    try {
        const { userId } = req.params;
        const { problemId, status, submittedAt ,title} = req.body;
// console.log('body is ->',problemId,status, submittedAt,title)
        const profile = await Profile.findOne({userId:userId});
// console.log('profile is->',profile);

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        // Add the problem submission to the user's profile
        profile.problemsSolved.push({ problemId,status, submittedAt,title });
        await profile.save();

        res.status(200).json(profile);
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});





module.exports=router;