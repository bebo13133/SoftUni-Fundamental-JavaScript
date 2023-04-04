function train(input) {

    let wagonsCapacity = input.shift().split(" ").map(Number)
    //console.log(wagonsCapacity)
    let pasenger = Number(input.shift())
    //console.log(pasenger)

    for (let i = 0; i < input.length; i++) {

        let newArr = (input[i]).split(" ");
        let command = newArr[0]
        let newWagon = Number(newArr[1])
        if (command === "Add") {
            wagonsCapacity.push(newWagon)
        } else {
            let people = Number(newArr[0])
            for (let k = 0; k < wagonsCapacity.length; k++) {
                if (wagonsCapacity[k] + people <= pasenger) {
                    wagonsCapacity[k] += people
                    break;
                }
            }
        }

    }
    console.log(wagonsCapacity.join(" "))

}