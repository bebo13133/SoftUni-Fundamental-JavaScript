function wordsTracker(data) {
    let result = {}
   data.shift().split(" ")
        .map(element => {
            { result[element] = 0 }
        });
    data.forEach((x) => {
        if (result.hasOwnProperty(x)) { result[x]++ }
    });

Object.entries(result)
        .sort((a, b) => b[1] - a[1])
        .forEach(x => console.log(`${x[0]} - ${x[1]}`))

}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)