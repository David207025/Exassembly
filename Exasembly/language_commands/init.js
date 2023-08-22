module.exports.run = (args, data) => {
  const new_data = new Array(0).fill(0x00);
  return { data: new_data, exit_code: 0, feedback: 0 };
};

module.exports.args = {
  amount: 0,
  strict: true,
};
