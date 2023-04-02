function theatrePromotions(typeDay, age) {

    let priceTicket = 0

    switch (typeDay) {

        case "Weekday":
            if (age >= 0 && age <= 18) {
                priceTicket = 12
                console.log(`${priceTicket}$`)
            } else if (age > 18 && age <= 64) {
                priceTicket = 18
                console.log(`${priceTicket}$`)
            } else if (age > 64 && age <= 122) {
                priceTicket = 12
                console.log(`${priceTicket}$`)
            } else {
                console.log("Error!")
            }
            break;
        case "Weekend":
            if (age >= 0 && age <= 18) {
                priceTicket = 15
                console.log(`${priceTicket}$`)
            } else if (age > 18 && age <= 64) {
                priceTicket = 20
                console.log(`${priceTicket}$`)
            } else if (age > 64 && age <= 122) {
                priceTicket = 15
                console.log(`${priceTicket}$`)
            } else {
                console.log("Error!")
            }
            break;
        case "Holiday":
            if (age >= 0 && age <= 18) {
                priceTicket = 5
                console.log(`${priceTicket}$`)
            } else if (age > 18 && age <= 64) {
                priceTicket = 12
                console.log(`${priceTicket}$`)
            } else if (age > 64 && age <= 122) {
                priceTicket = 10
                console.log(`${priceTicket}$`)
            } else {
                console.log("Error!")
            }
            break;
        default: console.log("Error!")
    }




}