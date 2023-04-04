function addAndSubtract(num1, num2, intiger) {
    signCheck(num1, num2, intiger)

    function signCheck(a, b, c) {
        let multiply = (a, b) => a + b
        let result = multiply(a, b) - c
        console.log(result)
    }
}