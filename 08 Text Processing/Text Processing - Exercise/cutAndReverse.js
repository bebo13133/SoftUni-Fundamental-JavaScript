function cutAndReverse(data){
    let partOne = data.substring(0,data.length/2).split("").reverse().join("")
    let partTwo = data.substring(data.length/2).split("").reverse().join("")
    return ((partOne)+"\n"+(partTwo))
    }


    /*
Вариант 2 
function cutAndReverse(data){
let partOne = data.substring(0,data.length/2)
let partTwo = data.substring(data.length/2)
console.log([...partOne].reverse().join(""))
console.log([...partTwo].reverse().join(""))
}

    */