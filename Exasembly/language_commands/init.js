module.exports.run = (args, data) => {

    const LEN = parseInt(args[0])
    const new_data = new Array(2**(LEN)).fill(0x00)
    return {data: new_data, exit_code: 0, feedback: 0}
}

module.exports.args = {
    amount: 1,
    strict: true
}