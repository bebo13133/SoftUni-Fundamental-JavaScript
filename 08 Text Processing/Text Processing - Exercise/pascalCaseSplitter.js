function pascalCaseSplitter(chars) {
    let result = chars[0]
    let letters = chars.toLowerCase()
    for (let i = 1; i < letters.length; i++) {
        if (chars[i] !== letters[i]) {
            result += ", "
        }
        result += chars[i]
    };
    console.log(result)
}