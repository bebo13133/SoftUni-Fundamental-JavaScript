function sortNumbers(a, b, c) {

    let arayNum = []
    arayNum.push (a, b, c)
   
    arayNum.sort(function (a, b) { return a - b })
    let reversed = arayNum.reverse()
console.log(arayNum.join('\n'))

}