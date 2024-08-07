const mongoose=require('mongoose');
const SubmissionSchema=new mongoose.Schema(
    {
      
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        problem_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Problems',
            required: true
          },
        code:{
            type: String,
            required:false
        }
        

    },{timestamps:true});

 const UserCode= mongoose.model('UserCode',SubmissionSchema);
 
 module.exports= UserCode;