
function carWash(carWash) {

    let value = 0;

    for (let command of carWash) {
        let percent = 0;
        if (command === 'soap') {
            value += 10;
        } else if (command === 'vacuum cleaner') {
            percent = 25 / 100 * value;
            value += percent;
        } else if (command === 'mud') {
            value *= 0.90;
        } else if (command === 'water') {
            percent = 20 / 100 * value;
            value += percent;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);