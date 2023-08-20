module.exports.run = (args, data) => {
    let new_data = data
    new_data[parseInt(args[0])] = args[1]

    return {data: new_data, exit_code: 0, feedback: 0}
}

module.exports.args = {
    amount: 2,
    strict: true
}