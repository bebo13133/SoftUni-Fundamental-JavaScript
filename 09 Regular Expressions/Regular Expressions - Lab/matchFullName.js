function matchFullName(text){
    let result = text.match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g)
     return result.join(" ")
    
    }