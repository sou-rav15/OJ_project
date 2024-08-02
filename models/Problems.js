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
        tags:[String],
        timeLimit: {
            type: Number,
            required: true,
        },
        note: {
            type: String,
        },
        constraints: {
            type: [String], // Array of strings if there are multiple constraints
            required: true,
        }
    },{timestamps:true});

 const Problems = mongoose.model('Problems',ProblemSchema);
 
 module.exports= Problems;