const mongoose = require('mongoose');
const { Schema } = mongoose 

const TestCasesSchema= new mongoose.Schema(
    {

        // problem_id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Problems',
        //     required: true
        //   },
        //   input: {
        //     type: Object,
        //     required: true
        //   },
        //   expected_output: {
        //     type: Object,
        //     required: true
        //   }


        problem_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Problems',
          required: true
        },
        input: {
          type: Schema.Types.Mixed,  // Flexible type to handle various formats
          // type:[Object],
          required: true
        },
        expected_output: {
          type: Schema.Types.Mixed,  // Flexible type to handle various formats
          required: true
        }
      
    },
    {timestamps:true});

    const TestCase= mongoose.model('TestCase',TestCasesSchema);

    module.exports=TestCase;