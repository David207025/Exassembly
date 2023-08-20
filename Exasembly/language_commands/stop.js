module.exports.run = (args, data) => {
    let new_data = data

    return {data: new_data, exit_code: 2, feedback: 0}
}

module.exports.args = {
    amount: 0,
    strict: true
}