const fs = require("fs");

module.exports.run = (args, data) => {
  let new_data = data;
  let bytecode = null;
  if (args[0].toString().startsWith("*")) {
    bits = args[0];
    bytecode = new_data[parseInt(bits.split("*")[1])];
  } else {
    bytecode = `0x${parseInt(args[0]).toString(16)}`;
  }

  return { data: new_data, exit_code: 4, feedback: bytecode };
};

module.exports.args = {
  amount: 1,
  strict: true,
};
