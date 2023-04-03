function houseParty(arr) {
    let emptyList = []
    for (let i = 0; i < arr.length; i++) {
        let party = arr[i].split(" is ")
        //console.log(party)
        let name = party[0]
        let command = party[1]
        if (command === "going!") {
            if (emptyList.indexOf(name) === -1) {
                emptyList.push(name)
               // console.log(`${name} is going!`)
            } else{
                console.log(`${name} is already in the list!`)
            }

        } else if (command === "not going!") {
            if (emptyList.indexOf(name) === -1) {
                console.log(`${name} is not in the list!`)
            } else {
                emptyList.splice(emptyList.indexOf(name), 1)
            }
        }

    }
    console.log(emptyList.join("\n"))
}