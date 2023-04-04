function pirates(input) {
    let townList = {}
    let townInfo = input.splice(0, input.indexOf("Sail")).map(line => {
        let [town, people, gold] = line.split("||").map(x => isNaN(x) ? x : Number(x))
        !townList.hasOwnProperty(town) ? townList[town] = { people, gold }
            : (townList[town].people += people, townList[town].gold += gold);
    })
    let secondLine = input.splice(1, input.indexOf("End") - 1).map(line => {
        let [command, a, b, c] = line.split("=>").map(x => isNaN(x) ? x : Number(x));
        switch (command) { case "Prosper": prosper(a, b); break; case "Plunder": plunder(a, b, c); break; };
    })
    function prosper(a, b) {
        (b < 0) ? console.log(`Gold added cannot be a negative number!`)
            : (townList[a].gold += b, console.log(`${b} gold added to the city treasury. ${a} now has ${townList[a].gold} gold.`));
    }
    function plunder(a, b, c) {
        console.log(`${a} plundered! ${c} gold stolen, ${b} citizens killed.`);
        if (townList.hasOwnProperty(a)) {
            townList[a].people -= b; townList[a].gold -= c
        }
        if (townList[a].people == 0 || townList[a].gold == 0) {
            delete townList[a], console.log(`${a} has been wiped off the map!`);
        }
    }
    if ((Object.keys(townList)).length > 0) {
        console.log(`Ahoy, Captain! There are ${(Object.keys(townList)).length} wealthy settlements to go to:`)
        for (let key in townList) {
            console.log(`${key} -> Population: ${townList[key].people} citizens, Gold: ${townList[key].gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}