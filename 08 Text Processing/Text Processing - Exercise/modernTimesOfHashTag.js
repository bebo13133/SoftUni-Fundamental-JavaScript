function modernTimes(str) {
    str.match(/#[a-zA-Z]+/g).forEach(x => { console.log(x.slice(1)) })
}


//вариант 2
/*

function moderntimes(input) {
    let text = input.split(" ")

    text.forEach(word => {
        let isValid = word.startsWith("#") && word.length > 1
        if (isValid) {
            let isLetter = true
            let result = ""
            for (let i = 1; i < word.length; i++) {

                let char = word[i].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false
                    break;
                } else {
                   
                    result += (word[i])
                    
                }
            }
            if(isLetter){
            console.log(result)
            }
        }
    });
}

*/