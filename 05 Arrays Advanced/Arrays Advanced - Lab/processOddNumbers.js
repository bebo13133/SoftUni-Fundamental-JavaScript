function processOddNumbers(numbers) {
    numbers = numbers.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse()
    console.log(numbers.join(" "))
}