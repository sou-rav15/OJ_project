const User= require('../models/user.js');
const jwt=require('jsonwebtoken');
const bcrypt =require('bcrypt');

const login=async(req,res)=>{
    try {
        const{email, password,username}
=req.body;
// console.log(email==null&&username==null);
let user={};
if(email==null&&username==null){
    
    return res.status(403).json({message:'email and username is required',success:false});
}
if(email==null){
     user=  await User.findOne({username})

}
else{
     user=  await User.findOne({email})

    
}

// const Username= await User.findOne({username});
// console.log(user.password==null);

//checking if user is already login into our website
if(!user){
    return res.status(403)
    .json({message:'username and email not found',succes:false});

}
console.log("email and username found");
// console.log(password);
// PASSWORD=(user==null)?Username.password:user.password
const ispasswordemail=await bcrypt.compare(password,user.password);
// const ispasswordusername= await bcrypt.compare(password,Username.password);
// console.log(!ispasswordemail);
if(!ispasswordemail){
    return res.status(403).json({message:'invalid details',sucess:false});//err-> password is wrong

}

const jwtoken= jwt.sign(
    {
        email:user.email, username:user.username,id:user._id
    },
    process.env.JWT_SECRET,
    {expiresIn:'24h'}
)

 res.status(200).json({
    message:'login successfully',
    success:true,
    jwtoken,email,name:user.name,username:user.username
 })
} catch (error) {
    res.status(500).json({message:"INTERNAL SERVER ERROR",succes:true}
    )    
    };
};
module.exports=login;