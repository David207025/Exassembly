module.exports.run = (args, data) => {
  let new_data = data;

  return { data: new_data, exit_code: 3, feedback: args[0] };
};

module.exports.args = {
  amount: 1,
  strict: true,
};
