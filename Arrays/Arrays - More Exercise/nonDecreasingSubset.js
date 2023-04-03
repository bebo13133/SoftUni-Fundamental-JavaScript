function nonDecreasingSubset(arr) {
    let max = arr[0]
    let result = []
    for (let el of arr) {
        if (el >= max) {
            max = el
            result.push(max)
        }
    }
    console.log(result.join(" "))
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);