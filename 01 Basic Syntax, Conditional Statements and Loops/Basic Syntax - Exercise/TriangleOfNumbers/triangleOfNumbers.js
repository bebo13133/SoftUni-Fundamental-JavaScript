function tringleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let buff = ""
        for (let j = 1; j <=i; j++) {
            buff += i + " "
        }
        console.log(buff)
    }

}