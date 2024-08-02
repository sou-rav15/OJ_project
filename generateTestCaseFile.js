// const fs = require('fs');
// const path =require('path');
// const {v4}= require('uuid');

// const dirCodes= path.join(__dirname,'Testcodes');

// if(!fs.existsSync(dirCodes)){
//     fs.mkdirSync(dirCodes,{recursive:true});
// }
// const generateTestCaseFile= async(language, codes)=>{
// const jobId =v4();
// const filename= `${jobId}.${language}`;
// const filePath =path.join(dirCodes,filename);
// fs.writeFileSync(filePath,codes);
// return filePath;
// };

// module.exports= generateTestCaseFile;

const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dirCodes = path.join(__dirname, 'Testcodes');

// Ensure the directory exists
if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, { recursive: true });
}

const generateTestCaseFile = async (language, codes) => {
    try {
        const jobId = uuidv4();
        const filename = `${jobId}.${language}`;
        const filePath = path.join(dirCodes, filename);

        // Writing file asynchronously and awaiting its completion
        await fs.promises.writeFile(filePath, codes);
        
        return filePath;
    } catch (error) {
        console.error('Error generating test case file:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

module.exports = generateTestCaseFile;
