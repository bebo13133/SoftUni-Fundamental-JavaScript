function emojiDetector(input) {

    let path =  /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    let digitPath = /(\d)/g
    let digitsSum = input[0].match(digitPath)
        .map(Number)
        .reduce((a, b) => (a * b));
    let emojiSymbol = []
    let foundCounter = 0
    let matches = input.shift()
        .matchAll(path);
    if (matches !== null) {
        for (let word of matches) {
            let emojiAscii = 0
            foundCounter++
            let emoji = word[2]
         let wordMap = [...emoji].filter(x => emojiAscii += x.charCodeAt())
            emojiAscii < digitsSum ? "" : emojiSymbol.push(word[0]);
        }
    }
console.log(`Cool threshold: ${digitsSum}`)
console.log(`${foundCounter} emojis found in the text. The cool ones are:`)
console.log(`${emojiSymbol.join("\n")}`)
}