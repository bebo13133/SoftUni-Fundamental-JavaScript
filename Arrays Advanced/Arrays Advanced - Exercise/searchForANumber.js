function searchForANumber(arr, command){

    let counter = 0
    let index=command[0]
    let specialNumber = command[2]
    let removeNumber = command[1]
    
    let newArr = arr.splice(0,index)
    newArr = newArr.slice(removeNumber) // removeNumber, newArr.length - 
                                        //е варианта с граница до края на масива
    for(let el of newArr){
        if(specialNumber === el){
            counter++
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`)
    
    }