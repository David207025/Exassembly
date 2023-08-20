#! /usr/bin/env node
let args = process.argv.slice(2);

try {
  if (args.length === 0) {
    args = ["help"];
  }
  const command = require(`./commands/${args[0]}.js`);

  for (let i = 0; i < command.flags.length; i++) {
    if (
      args.includes(command.flags[i].name) === false &&
      command.flags[i].required === true
    ) {
      return console.log("Invalid flags");
    } else if (args.includes(command.flags[i].name) === true) {
      if (
        args.find(
          (element, index) => args[index - 1] === command.flags[i].name
        ) === null ||
        args.find(
          (element, index) => args[index - 1] === command.flags[i].name
        ) === undefined
      ) {
        return console.log("Invalid flags");
      }
    }
  }

  args_json = [];
  for (i = 1; i < args.length; i += 2) {
    args_json[`${args[i]}`] = args[i + 1];
  }

  command.run(args_json);
} catch (err) {
  console.log(err);
}
