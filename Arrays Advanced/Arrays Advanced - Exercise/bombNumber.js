function foo(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[0]) {arr1.splice(i - arr2[1] > 0 ? i - arr2[1] : 0, arr2[1] * 2 + 1)
            i = 0
        }
    }
    console.log(arr1.reduce((a, v) => a + v, 0))
}


/*
Вариант 2 
function bombNumbers(arr, numbers) {
 
    let bombNumber = numbers[0]
    let powerBomb = (numbers[1])
 
    while (arr.includes(bombNumber)) {
        let number = arr.indexOf(bombNumber)
 
        //console.table(number)
 
 
        let remove = powerBomb*2 
        let start = number - (powerBomb)
        if (start < 0) { // ако специалното число е на нулев индекс
            start = 0
        }
        if(remove>=arr.length){ // ако масива свърши
            remove= arr.length-1
       }
        
        arr.splice(start, remove+1)
 
    }
    let sum = 0
    arr.forEach(element => {
        sum += element
    }); 
        
    
    console.log(sum)
}
*/