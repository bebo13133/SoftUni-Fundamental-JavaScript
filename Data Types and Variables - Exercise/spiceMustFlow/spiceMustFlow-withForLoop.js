function spiceMustFlow(seasoning) {
    let daysCounter = 0
    let totalYeild = 0
    for (i = seasoning; seasoning >= 100; seasoning -= 10) {
        totalYeild += (seasoning - 26)
        daysCounter++
    }
    totalYeild -= 26
    if (totalYeild < 0) {
        totalYeild = 0

    }
    console.log(daysCounter)
    console.log(totalYeild)
}