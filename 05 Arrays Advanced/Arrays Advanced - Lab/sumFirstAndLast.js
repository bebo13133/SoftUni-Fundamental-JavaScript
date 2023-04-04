function sumFirstAndLast(input){

    let newArr = input.map(Number)
    let firstNumebr = newArr.shift()
    let lastNumber=newArr.pop()
    console.log((firstNumebr+lastNumber))
    
    }
    sumFirstAndLast(['20', '30', '40'])