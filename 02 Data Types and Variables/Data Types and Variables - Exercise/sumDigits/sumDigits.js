function sumDigits(numbers) {

    let num = numbers
    let sum = 0
    while (num) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    console.log(sum)
}