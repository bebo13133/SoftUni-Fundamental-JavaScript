function printNthElement(arr) { 
    let result = 'no'; 
    for (let i = 0; i < arr.length ; i++) { 
        let leftSum = 0;
        let rightSum = 0; 
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        } 
        for (let k = arr.length - 1; k > i; k--) {
            rightSum += arr[k];
        } 
        if (leftSum === rightSum){
            result = i;
            break;
        }
    } 
    console.log(result);
}


//Вариант 2 
/*
function equalSums(arayNum) {  
let searchInd = 0
    for (let i = 0; i < arayNum.length; i++) {
        let counterOne = 0
        let counterTwo = 0
        //console.log(i)
        for (let n = 0; n < i; n++) {
            //console.log(n)
            counterOne += arayNum[n]
        }
        for (let k = arayNum.length - 1; k > i; k--) {
            counterTwo += arayNum[k]
        }
        if (counterOne === counterTwo) {
        searchInd = i 
             break;
         }else{
            searchInd = "no"        
         }
    }
    console.log(searchInd)



}

*/