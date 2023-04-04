function censoredWords(text,word){

    let wordStr = text
    while(wordStr.includes(word)){
      wordStr=wordStr.replace(word, "*".repeat(word.length))
     
    }
    console.log(wordStr)
}