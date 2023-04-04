function printNthElement(arr) {
    let n = arr[arr.length - 1]
    let result = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % n === 0) {
            result.push(arr[i])
        }
    }
    console.log(result.join(' '))
}printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);