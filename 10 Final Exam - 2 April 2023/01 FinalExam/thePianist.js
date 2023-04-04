function pianist(input) {
    let pianistsList = {}
    let pianistLine = input.splice(0, input.shift()).map(line => {
        [piece, composer, key] = line.split("|")
        if (!pianistsList.hasOwnProperty(piece))
            pianistsList[piece] = { composer, key }
    })
    let comandLine = input.splice(0, input.indexOf("Stop")).map(line => {
        let [command, a, b, c] = line.split("|")
        switch (command) {
            case "Add": add(a, b, c); break;
            case "Remove": remove(a); break;
            case "ChangeKey": change(a, b); break;
        }
    })
    function add(a, b, c) {
        !pianistsList.hasOwnProperty(a) ? (pianistsList[a] = { composer: b, key: c, },
            console.log(`${a} by ${b} in ${c} added to the collection!`)) : console.log(`${a} is already in the collection!`)
    }
    function remove(a) {
        pianistsList.hasOwnProperty(a) ? (delete pianistsList[a],
            console.log(`Successfully removed ${a}!`)) : console.log(`Invalid operation! ${a} does not exist in the collection.`)
    }
    function change(a, b) {
        pianistsList.hasOwnProperty(a) ? (pianistsList[a].key = b,
            console.log(`Changed the key of ${a} to ${b}!`)) : (console.log(`Invalid operation! ${a} does not exist in the collection.`))
    }

    for (let key in pianistsList) { console.log(`${key} -> Composer: ${pianistsList[key].composer}, Key: ${pianistsList[key].key}`) }
}
