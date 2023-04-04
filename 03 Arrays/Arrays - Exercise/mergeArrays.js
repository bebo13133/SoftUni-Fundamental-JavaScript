function mergeArrays(arr1, arr2){
    let newArr = []; 
 
    for(let i = 0; i < arr1.length; i++){
 
        let command1 =(arr1[i]);
        let command2 = (arr2[i]);
        if(i % 2 !== 0){
            newArr[i]=(command1 + command2);
        }else { 
          let element1 = Number(command1)
            let element2 = Number(command2)
            newArr[i]=element1+element2;
        }
    }
    console.log(newArr.join(" - "));
}