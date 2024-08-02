
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "Cppoutputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}
const executePython = (filepath, inputPath = null) => {
    return new Promise((resolve, reject) => {
      const command = inputPath
        ? `python ${filepath} < ${inputPath}`
        : `python ${filepath}`;
      
      exec(command, (error, stdout, stderr) => {
        if (error) {
          return reject({ error, stderr });
        }
        if (stderr) {
          return reject(stderr);
        }
        resolve(stdout);
      });
    });
  };
  module.exports=executePython;