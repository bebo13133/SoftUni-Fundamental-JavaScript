function maxNumber(arr) {
    buff = []
    for (let i = 0; i < arr.length; i++) {
        let elementA = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {
            let elementB = arr[j];

            if (elementA > elementB) {
                continue
            } else if (j == arr.length) {
                buff.push(elementA)
                break;
            } else {
                break;
            }
        }
    }
    console.log(buff.join(" "))
}