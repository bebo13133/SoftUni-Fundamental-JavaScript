function jansNotation(input) {
    let numbers = [];

    for (let i = 0; i < input.length; i++) {
        if (Number(input[i])) {
            numbers.push(Number(input[i]));
        } else {
            doMath(numbers, input[i]);
        }
    }

    if (numbers.length >= 2) {
        console.log('Error: too many operands!')
    } else if(numbers.length != 0){
        console.log(numbers.toString());
    }

    function doMath(numbers, operator) {
        if (numbers.length == 1 || numbers.length == 0) {
            console.log('Error: not enough operands!');
        }
        if (operator === "/") {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] / numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        } else if (operator === "+") {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] + numbers[numbers.length - 1];
            numbers.splice(-1, 1);
        } else if (operator === "-") {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] - numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        } else if (operator === "*") {
            numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
    }
}