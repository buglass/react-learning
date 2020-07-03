const fs = require("fs");
const path = require("path");
const reporter = require("stylelint-html-reporter");
var outputPath = "./build/reports/lint";

function createDirectory(outputPath){
  const sep = path.sep;
  const initDir = path.isAbsolute(outputPath) ? sep : "";
  outputPath.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(parentDir, childDir);
    if (!fs.existsSync(curDir)) {
      fs.mkdirSync(curDir);
    }
    return curDir;
  }, initDir);
}

module.exports = function(result){
  createDirectory(outputPath);
  return reporter({
    filename: path.join(outputPath, "scsslint_report.html"),
    console: false
  })(result);
};
