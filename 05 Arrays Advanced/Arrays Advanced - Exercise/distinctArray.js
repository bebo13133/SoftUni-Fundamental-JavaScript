function distinctArray(input) {
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (result.indexOf(input[i]) === -1) {
            result.push(input[i])
        }
    }
    return (result.join(' '))
}