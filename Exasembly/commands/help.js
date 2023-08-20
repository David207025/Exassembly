const fs = require("fs");

module.exports.run = (args) => {
  console.log("Exasm help pannel");
  let commands = fs
    .readdirSync("./commands")
    .filter((command) => command.endsWith(".js"));

  if (args["-f"] === undefined) {
    commands.forEach((command, index) => {
      if (command !== "help.js") {
        const cmd = require(`./${command}`);
        commands[index] = commands[index].split(".")[0];

        args = "";

        cmd.flags.forEach((flag) => {
          args += `${flag.name}[${flag.required ? "required" : "optional"}] `;
        });

        console.log(`\t${command.split(".")[0]}\t${args}`);
      } else {
        commands[index] = commands[index].split(".")[0];

        args = "";

        this.flags.forEach((flag) => {
          args += `${flag.name}[${flag.required ? "required" : "optional"}] `;
        });

        console.log(`\t${command.split(".")[0]}\t${args}`);
      }
    });
  } else {
    command = args["-f"] + ".js";
    if (command !== "help.js") {
      const cmd = require(`./${command}`);

      args = "";

      cmd.flags.forEach((flag) => {
        args += `${flag.name}[${flag.required ? "required" : "optional"}] `;
      });

      console.log(`\t${command.split(".")[0]}\t${args}`);
    } else {
      args = "";

      this.flags.forEach((flag) => {
        args += `${flag.name}[${flag.required ? "required" : "optional"}] `;
      });

      console.log(`\t${command.split(".")[0]}\t${args}`);
    }
  }
};

module.exports.flags = [{ name: "-f", required: false }];
module.exports.description = "Show the help panel";
