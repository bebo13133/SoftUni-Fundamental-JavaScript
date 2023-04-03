function flightSchedule(dataFly) {
    let flyInfo = {}
    let firstList = dataFly.shift()
    let secondList = dataFly.shift()
    let thirtList = dataFly.shift()
    firstList.forEach(flyLine => {
        [flyNumber, destination] = flyLine.split(" ");
        flyInfo[flyNumber] = {
            Destination: destination,
            Status: "Ready to fly"
        }
    })
    secondList.forEach(secondInfo => {
        [flyNumber, Status] = secondInfo.split(" ")
        if (flyInfo[flyNumber] !== undefined) {
            flyInfo[flyNumber].Status = Status
        }
    })
    for (let fly in flyInfo) {
        if (flyInfo[fly].Status == thirtList) {
            console.log(flyInfo[fly])
        }
    };
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
])