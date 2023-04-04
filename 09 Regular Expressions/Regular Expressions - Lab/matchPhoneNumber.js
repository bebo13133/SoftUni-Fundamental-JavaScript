function matchPhoneNumber(text){
    let path = /\+359([ -])2\1\d{3}\1\d{4}\b/g
    let validNumber = text.shift().match(path).join(", ")
    console.log(validNumber)
    }