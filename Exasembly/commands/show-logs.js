const fs = require("fs");

module.exports.run = (args) => {
  console.log("Logs:");
  const logs = fs.readFileSync(args["-s"], "utf-8");
  logs2 = `->\t${logs
    .slice(0, logs.length - 1)
    .replace(RegExp("\n", "g"), "\n->\t")}`;
  console.log(logs2);
};

module.exports.flags = [{ name: "-s", required: true }];
module.exports.description = "Show the Logs of the specified file";
