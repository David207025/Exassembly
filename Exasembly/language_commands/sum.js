module.exports.run = (args, data) => {

    let new_data = data

    let bytecode = new Array(args.length - 1).fill(0x0)
    let sum = 0
    for ( i = 0; i < args.length - 1 ; i++) {
        if (args[i].toString().startsWith("*")) {
            bits = args[i]
            bytecode[i] = (new_data[parseInt(bits.split("*")[1])])
        } else {
            bytecode[i] = (`0x${parseInt(args[i]).toString(16)}`)
        }
        sum += parseInt(bytecode[i])
    }

    new_data[parseInt(args[args.length - 1])] = `0x${(sum).toString(16)}`


    return {data: new_data, exit_code: 0, feedback: 0}
}

module.exports.args = {
    amount: 10,
    strict: false
}