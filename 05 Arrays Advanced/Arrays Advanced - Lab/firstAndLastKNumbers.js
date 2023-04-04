function firstAndLastKNumbers(numbers) {

    let k = numbers.shift()
    let firstDoubleNumbs = numbers.slice(0, k)
    let lastDoubleNumbs = numbers.slice(numbers.length - k)
    console.log(firstDoubleNumbs.join(' '))
    console.log(lastDoubleNumbs.join(" "))
}