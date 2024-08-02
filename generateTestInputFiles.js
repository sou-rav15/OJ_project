
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const dirInputs = path.join(__dirname, 'Testcaseinputs');

if (!fs.existsSync(dirInputs)) {
    fs.mkdirSync(dirInputs, { recursive: true });
}

const generateTestInputFile = async (input) => {
    // console.log('input is in here ->',input);
    const jobID = uuid();
    const input_filename = `${jobID}.txt`;
    const input_filePath = path.join(dirInputs, input_filename);
    // console.log('inputpath->',input_filePath);
    for(const key in input){
        console.log(key,'->',input[key]);
        // console.log(key,Array.isArray(input[key]));
        if(Array.isArray(input[key])){
            for(let i=0;i<input[key].length;i++){
                  await fs.appendFileSync(input_filePath, JSON.stringify(input[key][i])+' '); 
            }
            await fs.appendFileSync(input_filePath, '\n '); 
           continue;

        }
      await fs.appendFileSync(input_filePath, JSON.stringify(input[key])+'\n');  
    }
    
    return input_filePath;
};

module.exports =  generateTestInputFile;

