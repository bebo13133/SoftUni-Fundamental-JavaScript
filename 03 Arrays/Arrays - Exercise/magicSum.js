function magicSum(array, sum) {
    for (let i = 0; i < array.length; i++) {
        let first = array[i]
        for (let k = i + 1; k < array.length; k++) {
            let second = array[k]
            let sumDigit = first + second

            if (sumDigit === sum) {
                console.log(`${first} ${second}`)
            }

        }
    }
}