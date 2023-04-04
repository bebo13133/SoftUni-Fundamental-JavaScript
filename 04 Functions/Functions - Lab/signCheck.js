function signCheck(a, b, c) {
    let devide = (a, b) => a * b
    let result = devide(a, b) * c
    let resultString = result.toString()
    resultString.includes('-') ? console.log('Negative') : console.log('Positive')

}