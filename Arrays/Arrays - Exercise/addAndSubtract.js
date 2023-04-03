function addAndSubtract(arr) {

    let newArray = []
    let sum = 0
    let sumOld = 0
    for (let i = 0; i < arr.length; i++) {
        sumOld += arr[i]

        let num1 = arr[i]
        if (arr[i] % 2 === 0) {

            num1 += i
            sum += num1
            newArray.push(num1)
        } else {

            num1 -= i
            newArray.push(num1)
            sum += num1
        }
      
    }
    console.log(newArray)
    console.log(sumOld)
    console.log(sum)
   
}