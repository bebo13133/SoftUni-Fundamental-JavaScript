function vacationCalculator(size, type, day) {
    let totalPrice = 0

    switch (day) {
        case "Friday":
            switch (type) {
                case "Students":
                    totalPrice = size * 8.45;
                    if (size >= 30) {
                        totalPrice = totalPrice * 0.85
                    }
                    break;
                case "Business":
                    totalPrice = size * 10.90;
                    if (size >= 100) {
                        totalPrice = totalPrice - 10 * 10.90
                    }
                    break;
                case "Regular":
                    totalPrice = size * 15;
                    if (size >= 10 && size <= 20) {
                        totalPrice = totalPrice * 0.95
                    }
            }
            break;
        case "Saturday":
            switch (type) {
                case "Students":
                    totalPrice = size * 9.80;
                    if (size >= 30) {
                        totalPrice = totalPrice * 0.85
                    }
                    break;
                case "Business":
                    totalPrice = size * 15.60;
                    if (size >= 100) {
                        totalPrice = totalPrice - 10 * 15.60
                    }
                    break;
                case "Regular":
                    totalPrice = size * 20;
                    if (size >= 10 && size <= 20) {
                        totalPrice = totalPrice * 0.95
                    }
            }
            break;
        case "Sunday":
            switch (type) {
                case "Students":
                    totalPrice = size * 10.46;
                    if (size >= 30) {
                        totalPrice = totalPrice * 0.85
                    }
                    break;
                case "Business":
                    totalPrice = size * 16;
                    if (size >= 100) {
                        totalPrice = totalPrice - 10 * 16
                    }
                    break;
                case "Regular":
                    totalPrice = size * 22.50;
                    if (size >= 10 && size <= 20) {
                        totalPrice = totalPrice * 0.95
                    }
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}