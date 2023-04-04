function garage(input) {

    let cars = {}

    input.map(element => {
        [carNum, carsInfo] = element.split(" - ")

        if (cars[carNum] === undefined) cars[carNum] = [];

        cars[carNum].push(carsInfo)
    });
    let output = ""
    Object.entries(cars).sort((a, b) => a[0] - b[0]).forEach(([garage, cars]) => {
        output += `Garage № ${garage}\n`;
        for (let currCar of cars) {
            currCar = currCar.replace(/: /g, ' - ');
            output += `--- ${currCar}\n`
        }
    })
    console.log(output)
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])