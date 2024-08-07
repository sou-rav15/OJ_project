const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputsJava");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeJava = (filepath, inputPath = null) => {
  const jobId = path.basename(filepath).split(".")[0];
  const className = path.basename(filepath).split(".")[0];
  
  return new Promise((resolve, reject) => {
    const compileCommand = `javac ${filepath}`;
    const runCommand = inputPath 
      ? `java -cp ${path.dirname(filepath)} ${className} < ${inputPath}` 
      : `java -cp ${path.dirname(filepath)} ${className}`;
    
    exec(`${compileCommand} && ${runCommand}`, (error, stdout, stderr) => {
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

module.exports = executeJava;
