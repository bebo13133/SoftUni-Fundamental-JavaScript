function reverseAnArrayOfNumbers(num, input){
    let arr = []
    for (let i = 0 ; i<num; i++){
     arr[num - 1 - i] = input[i]
    }
console.log(arr.join(" "))
}