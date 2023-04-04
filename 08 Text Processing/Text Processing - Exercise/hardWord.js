function hardWord(array) {
    let text = array[0];
    let missingWords = array[1]
        .sort((a, b) => b.length - a.length);

    let res = text;

    for (let word of missingWords) {
        let splitedText = res.split("_".repeat(word.length));
        res = splitedText.join(word);
    }

    console.log(res);

}