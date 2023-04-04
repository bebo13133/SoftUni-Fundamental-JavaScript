function plantDiscovery(input) {
    let plantsList = {}
    let plantLine = input.splice(0, input.shift()).forEach((el) => {
        let [namePlant, rarity] = el.split("<->").map(x => isNaN(x) ? x : Number(x))
        plantsList[namePlant] = { rarity, rating: [] }
    });
    let commandLine = input.slice(0, input.indexOf("Exhibition")).forEach(line => {
        let [command, ...rest] = line.split(": ")
        let [plant, data] = rest[0].split(" - ").map(x => isNaN(x) ? x : Number(x))
        if (plantsList.hasOwnProperty(plant)) {
            switch (command) {
                case 'Rate': rate(plant, data); break;
                case 'Update': update(plant, data); break;
                case 'Reset': reset(plant); break;
            }
        } else {console.log("error")}
    })
    function rate(a, b) { plantsList[a].rating.push(b) }
    function update(a, b) { plantsList[a].rarity = b }
    function reset(a) { plantsList[a].rating = [] }
    console.log(`Plants for the exhibition:`)
    
    for (let key in plantsList) {
        let avarage = plantsList[key].rating.reduce((a, b) => (a + b), 0)
        let finalResult = avarage / (plantsList[key].rating).length || 0
        console.log(`- ${key}; Rarity: ${plantsList[key].rarity}; Rating: ${finalResult.toFixed(2)}`)
    }
}