function condenseArrayToNumber(arrs) {
    let numArr =arrs
    for (let k =numArr.length; k > 1; k--) {
       let newArr = []
        for (let i = 0; i < numArr.length - 1; i++) {
            let first = numArr[i]
            let second = numArr[i + 1]

            newArr.push(first + second);
        }
   numArr = newArr     
    }
    console.log(numArr.join()) 
}

//Вариант с while цикъл

// function condenseArrayToNumber(arrs) {
//     let numArr =arrs
//     while (numArr.length > 1) {
//        let newArr = []
//         for (let i = 0; i < numArr.length - 1; i++) {
//             let first = numArr[i]
//             let second = numArr[i + 1]

//             newArr.push(first + second);
//         }
//    numArr = newArr  
//     }
//     console.log(numArr.join()) 
// }