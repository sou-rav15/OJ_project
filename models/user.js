const mongoose=require('mongoose');
 
const UserSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        }, age:{
            type:Number,
            required:true,
        }, email:{
            type:String,
            required:true,
            unique:true
        },
        username:{
            type:String,
            required:true,
            required:true
        },
        password:{
            type:String,
            required:true,
        }
    },{});

const User=mongoose.model('User',UserSchema)
 
module.exports= User;