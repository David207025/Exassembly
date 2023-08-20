module.exports.run = (args, data) => {
    let new_data = data
    let bytecode = null
    if (args[0].toString().startsWith("*")) {
        bits = args[0]
        bytecode = new_data[parseInt(bits.split("*")[1])]
    } else {
        bytecode = `0x${parseInt(args[0]).toString(16)}`
    }
    console.log(bytecode)

    return {data: new_data, exit_code: 0, feedback: 0}
}

module.exports.args = {
    amount: 1,
    strict: true
}