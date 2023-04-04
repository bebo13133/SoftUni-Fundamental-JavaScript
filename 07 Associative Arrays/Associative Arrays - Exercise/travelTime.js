function travelTime(input) {
    let destination = {}
    while (input.length > 0) {
        [country, town, cost] = input.shift().split(" > ")
        cost = Number(cost)
        if (destination.hasOwnProperty(country)) {
            if (destination[country].hasOwnProperty(town)) {
                let price = destination[country][town]
                if (price > cost) destination[country][town] = cost

            } else {
                destination[country][town] = cost
            }
        } else {
            destination[country] = {
                [town]: cost
            }
        }
    }
    for (let country of Object.keys(destination).sort((a, b) => a.localeCompare(b))) {
        let forPrint = country + " -> "
        let entries = Object.entries(destination[country]).sort(([a, valA], [b, valB]) => valA - valB)
        for (let [key, valuea] of entries) {
            forPrint += key + " -> " + valuea + " "
        }
        console.log(forPrint)
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])