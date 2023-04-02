function reverseInPlace(char){
    let result= []  
    for( let i = char.length -1; i>=0 ;i--){
    result.push(char[i])       
    }
    console.log(result.join(" ")) 
    }