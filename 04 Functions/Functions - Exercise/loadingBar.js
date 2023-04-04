function loadingBar(number) {
    let procentRepeat = "%".repeat(number / 10)
    let pointRepeat = ".".repeat((10) - procentRepeat.length)

    loadingBarNumber(number)
    function loadingBarNumber() {
        if (number === 100) {
            console.log(`100% Complete!`)

        } else if (number < 100) {

            console.log(`${number}% [${procentRepeat}${pointRepeat}]`)
            console.log(`Still loading...`)
        }
    }
}