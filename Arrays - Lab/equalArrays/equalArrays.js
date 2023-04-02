function equalArrays(arr1, arr2) {
    let newSum = 0
    let valid = false
    for (let i = 0; i < arr1.length; i++) {
        let num1 = Number(arr1[i])
        let num2 = Number(arr2[i])
        if (num1 === num2) {
            newSum += num1
            continue;
        } else {

            console.log(`Arrays are not identical. Found difference at ${i} index`)
            valid = true
            break
        }

    }
    if (valid !== true) {
        console.log(`Arrays are identical. Sum: ${newSum}`)
    }
}