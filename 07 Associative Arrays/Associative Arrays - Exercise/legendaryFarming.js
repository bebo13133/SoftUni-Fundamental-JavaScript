function legendaryFarming(array) {
    let items = {
        shards: 0,
        fragments: 0,
        motes: 0,
    }
    let legendaryItem = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath",
    }
    let junk = {}
    let winnerName = null
    array = array.split(" ").map(x => x.toLowerCase());
    for (let i = 0; i < array.length; i += 2) {
        let itemKey = array[i + 1]
        let countItem = Number(array[i])
        if (items[itemKey] !== undefined) {
            items[itemKey] += countItem
            if (items[itemKey] >= 250) {
                winnerName = legendaryItem[itemKey]
                items[itemKey] = items[itemKey] - 250
                break;
            }
        } else {
            junk[itemKey] = (junk[itemKey] === undefined ? 0 : Number(junk[array[i + 1]])) + Number(array[i])
        }
    }
    items = Object.entries(items).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    junk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]))
    console.log(`${winnerName} obtained!`)
    items.forEach(element => console.log(`${element[0]}: ${element[1]}`));
    if (Object.keys(junk).length > 0)
        junk.forEach(x => console.log(`${x[0]}: ${x[1]}`))
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')