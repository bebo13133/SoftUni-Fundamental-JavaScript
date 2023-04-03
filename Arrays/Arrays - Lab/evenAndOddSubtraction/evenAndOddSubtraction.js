function evenAndOddSubtraction(arr) {
    let evenSum = 0
    let oddSum = 0
    for (let el of arr) {
        let numel = Number(el)
        if (numel % 2 === 0) {
            evenSum += numel
        } else if (numel % 2 !== 0) {
            oddSum += numel
        }
    }
    let result = evenSum - oddSum

    console.log(result)
}