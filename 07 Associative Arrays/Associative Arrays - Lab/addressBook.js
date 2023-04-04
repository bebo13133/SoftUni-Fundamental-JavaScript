function adrresBook(input) {
    let adrresBookObj = {}
    input.forEach(element => {
        let [name, adrres] = element.split(":")
        adrresBookObj[name] = adrres
    })
    let sorted = Object.entries(adrresBookObj)
    sorted.sort((keyA, keyB) => keyA[0].localeCompare(keyB[0]))

    for (let [name, adrres] of sorted) {
        console.log(`${name} -> ${adrres}`)
    }


}