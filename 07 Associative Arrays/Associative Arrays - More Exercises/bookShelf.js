function bookShelf(input) {
    let shelf = {};
    for (let line of input) {
        if (line.includes("->")) {
            let [iD, genre] = line.split(' -> ')
            if (shelf[iD] === undefined) shelf[iD] = { [genre]: [] };
        } else {
            let [bookName, genre] = line.split(", ")//
            for (let element in shelf) {
                if (shelf[element].hasOwnProperty(genre))
                    shelf[element][genre].push(bookName)
            }
        }
    }
    Object.keys(shelf).sort((a, b) => Object.entries(shelf[b])[0][1].length - Object.entries(shelf[a])[0][1].length).forEach(el => {
        console.log(`${el} ${Object.keys(shelf[el])}: ${Object.values(shelf[el])[0].length}`)

        Object.values(shelf[el]).map(x => {
            x.sort((a, b) => a.localeCompare(b)).map(el => console.log(`--> ${el}`))
        })
    })
}