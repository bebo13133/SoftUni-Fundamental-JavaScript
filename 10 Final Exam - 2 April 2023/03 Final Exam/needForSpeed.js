function needForSpeed(input) {
    let cars = {}
    let list = input.splice(0, input.shift()).map(line => {
        let [car, mileage, fuel] = line.split("|").map(x => isNaN(x) ? x : Number(x))
        cars[car] = { mileage, fuel }
    })
    let commandLine = input.splice(0, input.indexOf("Stop")).forEach(el => {
        let [command, car, distance, fuel] = el.split(" : ").map(x => isNaN(x) ? x : Number(x))
        switch (command) {
            case "Drive": drive(car,distance,fuel); break;
            case "Refuel": refuel (car,distance); break;
            case "Revert": revert (car,distance);break;
        }
    });
    function drive(a, b, c) {
        if (cars[a].fuel < c) {
            console.log("Not enough fuel to make that ride")
            return null
        }
        cars[a].mileage += b
        cars[a].fuel -= c
        console.log(`${a} driven for ${b} kilometers. ${c} liters of fuel consumed.`)
        if (cars[a].mileage >= 100000) {
            console.log(`Time to sell the ${a}!`)
            delete cars[a]
        }
    }
    function refuel(a, b) {
        if (cars[a].fuel + b > 75) {
            b = 75 - cars[a].fuel
            cars[a].fuel = 75
        } else {
            cars[a].fuel += b
        }
        console.log(`${a} refueled with ${b} liters`)
    }
    function revert(a, b) {
        cars[a].mileage -= b
        cars[a].mileage < 10000 ? cars[a].mileage = 10000 : console.log(`${a} mileage decreased by ${b} kilometers`)      
    }
    for(let keys in cars){
        console.log(`${keys} -> Mileage: ${cars[keys].mileage} kms, Fuel in the tank: ${cars[keys].fuel} lt.`)
    }
}