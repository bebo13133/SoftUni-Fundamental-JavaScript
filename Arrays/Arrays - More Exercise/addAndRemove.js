function addAndRemove(arr) {
    let printResult = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            printResult.push(i + 1)
        } else if (arr[i] === 'remove') {
            printResult.pop()
        }
    }
    (printResult.length === 0) ? console.log("Empty") : console.log(printResult.join(" "));
}
addAndRemove(['remove', 'remove', 'remove']);