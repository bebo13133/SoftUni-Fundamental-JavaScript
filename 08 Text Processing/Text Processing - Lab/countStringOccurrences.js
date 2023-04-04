function countStringOccurrences(text, word){
    count = text.split(" ").filter(x=> x===word).length
    console.log(count)
    }