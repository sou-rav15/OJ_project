const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "JavaScriptOutputs");

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
};

const executeJavaScript = (filepath) => {
    return new Promise((resolve, reject) => {
      const command = `node ${filepath}`;
      
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
  module.exports= executeJavaScript;