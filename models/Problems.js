const mongoose=require('mongoose');

const ProblemSchema = new mongoose.Schema(
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
        tags:[String]
    },{timestamps:true});

 const Problems = mongoose.model('Problems',ProblemSchema);
 
 module.exports= Problems;