function negativeOrPositiveNumbers(numbers) {
    let newNumbers = []
    numbers.forEach(element => { (element < 0) ? newNumbers.unshift(element) : newNumbers.push(element) });
    return (newNumbers.join("\n"))
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])