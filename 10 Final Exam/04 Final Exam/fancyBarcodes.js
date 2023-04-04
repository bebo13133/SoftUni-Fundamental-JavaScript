function fancy(input) {
    let num=input.shift()
    let path = /(@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(@#{1,})/g
   input.map(word=> {
        let searchWord = word.match(path)
        if (searchWord !== null) {
            let words = searchWord[0]
            let digitChars = [...words].filter(digit => /\d/g.test(digit)).join("");
            let result = digitChars === "" ? '00' : digitChars
            console.log(`Product group: ${result}`)
        } else {
            console.log("Invalid barcode")
        }
    })
}