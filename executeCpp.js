const fs = require('fs');
const path =require('path');
const {exec}= require('child_process');
const outputPath= path.join(__dirname,'output');

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath,{recursive:true});
}
const executeCpp= async(filePath)=>{
    const jobId=path.basename(filePath).split('.')[0];
    const output_filename= `${jobId}.exe`;
    const outPath=path.join(outputPath,output_filename);
    // return outPath;
    return new Promise((resolve,reject)=>{
       exec(`g++ ${filePath} -o ${outPath} && cd ${outputPath} &&.\\${output_filename}`,
        (error,stdout,stderr) =>{
            if(error){
                reject({error,stderr});
            }
            if(stderr){
                reject(stderr);

            }
            resolve(stdout);
       })
    });
};

module.exports= executeCpp;