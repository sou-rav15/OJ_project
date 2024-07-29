const fs = require('fs');
const path =require('path');
const {v4}= require('uuid');

const dirCodes= path.join(__dirname,'codes');

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
}
const generateFile= async(language, codes)=>{
const jobId =v4();
const filename= `${jobId}.${language}`;
const filePath =path.join(dirCodes,filename);
fs.writeFileSync(filePath,codes);
return filePath;
};

module.exports= generateFile;