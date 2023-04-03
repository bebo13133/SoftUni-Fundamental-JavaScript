function palindromeIntegers(numberArray) {
    for (let nums of numberArray) {
        let stringNumbers = nums.toString()

        let reverseStringNumbers = stringNumbers.split("").reverse().join("")

        stringNumbers === reverseStringNumbers ? console.log("true") : console.log("false")
    }

}
palindromeIntegers([123, 323, 421, 121]);