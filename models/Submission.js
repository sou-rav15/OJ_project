const mongoose=require('mongoose');
const SubmissionSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        difficulty:{
            type:String,
            required:true,
        },
        tag:{
            type:String,
            enum:[''],
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }

    },{timestamps:true});

 const Submission= mongoose.model('Problems',SubmissionSchema);
 
 module.exports= Submission;