const User = require('../models/user');

const router =require('express').Router();


router.get('/',async(req,res)=>{
    const user = await User.find();
res.json({message:'hey',user})
})


router.get('/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const data = await User.findOne({ username: username });

        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('Fetched data');
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in finding data', error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports=router;