module.exports.run = (args, data) => {
  let new_data = data;

  let repeats = null;
  if (args[0].toString().startsWith("*")) {
    bits = args[0];
    repeats = new_data[parseInt(bits.split("*")[1])];
  } else {
    repeats = `0x${parseInt(args[0]).toString(16)}`;
  }

  return { data: new_data, exit_code: 1, feedback: repeats };
};

module.exports.args = {
  amount: 1,
  strict: true,
};
