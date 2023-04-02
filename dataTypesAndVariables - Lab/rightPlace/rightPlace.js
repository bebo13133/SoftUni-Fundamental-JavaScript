function rightRaplace(str, char, result){

    let replaceName = str.replace("_", char)
    
    let replaceStr = replaceName === result? "Matched" : "Not Matched"
    
    console.log(replaceStr)
  
    }