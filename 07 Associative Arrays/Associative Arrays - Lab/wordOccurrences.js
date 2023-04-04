function wordOccurrences(input) {
    let words = {}
    input.forEach(element => {
        if (!words[element]) words[element] = 0
        words[element]++
    });
    Object.entries(words).sort((a, b) => b[1] - a[1]).map(word =>
        console.log(`${word[0]} -> ${word[1]} times`))
}