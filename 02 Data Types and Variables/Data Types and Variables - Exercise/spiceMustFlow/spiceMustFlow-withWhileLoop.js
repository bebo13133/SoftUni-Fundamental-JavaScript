function spiceMustFlow(seasoning) {

    let daysCounter = 0

    let totalYeild = 0

    while (seasoning >= 100) {


        totalYeild += (seasoning - 26)


        seasoning -= 10
        daysCounter++
    }
    totalYeild -= 26
    if (totalYeild < 0) {
        totalYeild = 0

    }
    console.log(daysCounter)
    console.log(totalYeild)
}