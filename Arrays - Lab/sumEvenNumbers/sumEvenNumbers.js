function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let strNumber of numbers) {
        let numbers = Number(strNumber);
        if (numbers % 2 === 0) {
            sum += numbers
        }
    }
    console.log(sum)
}