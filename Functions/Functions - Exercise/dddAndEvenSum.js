function oddAndEvenSum(digits) {
    let stringDigits = digits.toString()

    let oddNum = 0;
    let evenNum = 0;
    let stringDigitsLength = stringDigits.length;
    for (let i = 0; i < stringDigitsLength; i++) {
        let number = Number(stringDigits[i]);
        (number % 2 === 0) ? evenNum += number : oddNum += number;

    }
    return (`Odd sum = ${oddNum}, Even sum = ${evenNum}`)
}
oddAndEvenSum(1000435); // Odd sum = 9, Even sum = 4