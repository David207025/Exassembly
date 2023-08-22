const fs = require("fs");

module.exports.run = (args) => {
  console.log("Compiling " + args["-s"]);
  let program_data = null;
  let tokens = null;
  let cmd = null;
  let line = 0;

  let loop_start = null;
  let loop_end = null;
  let loop_repeats = null;

  let logs_file = null;

  function read() {
    const cmd_args = tokens;
    cmd_args.splice(0, 1);
    result = cmd.run(cmd_args, program_data);
    program_data = result.data;
    exit_code = result.exit_code;
    feedback = result.feedback;

    if (exit_code == 1) {
      loop_start = parseInt(line);
      loop_repeats = result.feedback;
    } else if (exit_code == 2) {
      loop_end = parseInt(line);
    } else if (exit_code == 3) {
      logs_file = result.feedback;
      fs.writeFileSync(logs_file, "", "utf-8");
    } else if (exit_code == 4) {
      writtenData = fs.readFileSync(logs_file, "utf-8");
      fs.writeFileSync(
        logs_file,
        writtenData + result.feedback + "\n",
        "utf-8"
      );
    }

    if (loop_repeats > 1 && line == loop_end) {
      line = loop_start;
      loop_repeats -= 1;
    }
  }

  const data = fs.readFileSync(args["-s"], "utf-8", (err) => {});
  const lines = data.split("\r\n");
  line = 0;
  while (line < lines.length) {
    tokens = lines[line].split(" ");
    cmd = require(`../language_commands/${tokens[0]}.js`);

    if (cmd.args.strict == true) {
      if (tokens.length - 1 == cmd.args.amount) {
        read();
      }
    } else if (cmd.args.strict == false) {
      if (tokens.length - 1 <= cmd.args.amount) {
        read();
      }
    }
    line++;
  }
};

module.exports.flags = [
  { name: "-s", required: true },
  { name: "-o", required: false },
];
module.exports.description = "Compile the specified file";
