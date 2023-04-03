function maxSequence(arr) {
    let currentArr = []
    for (let i = 0; i < arr.length; i++) {
        let buffArr = []
        let leftNum = arr[i]

        for (let k = i; k < arr.length; k++) {
            let rightNum = arr[k]

            if (leftNum === rightNum) {
                buffArr.push(leftNum)
            } else {

                break
            }
            if (buffArr.length > currentArr.length) {
                currentArr = buffArr
            }
        }
    }
    console.log(currentArr.join(" "))

}