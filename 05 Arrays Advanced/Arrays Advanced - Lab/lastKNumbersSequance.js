function lastKNumbersSequence(length, count) {

    let sequenceArray = [1];
    for (let i = 1; i < length; i++) {
        let mathMaxNum = Math.max(sequenceArray.length - count, 0)
        let lastIndex = sequenceArray.slice(mathMaxNum);
        let sum = 0;
lastIndex.forEach(element => { 
    sum+=element   
});
sequenceArray.push(sum)
    }
console.log(sequenceArray.join(" "));

}