function mirrorWord(data) {
    let result = []
    let path = /([\@|\#])(?<words>[A-Za-z]{3,})(\1)(\1)(?<secondWord>[A-Za-z]{3,})(\1)/g
    let matches = data.shift().match(path)
    if (matches !== null) {
        console.log(`${matches.length} word pairs found!`),
        (matches.map(x => {
            let words = x.split(/[\@|\#]/g).filter(y => y !== "");
            let reverseWord = words[1].split("").reverse().join("");
            if (words[0] === reverseWord) result.push(`${words[0]} <=> ${words[1]}`)
        }))

    } else {
        console.log('No word pairs found!')
    }
    result.length > 0 ? console.log(`The mirror words are: \n${result.join(", ")}`) : console.log('No mirror words!')
}