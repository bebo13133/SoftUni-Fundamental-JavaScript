function starEnigma(input) {
    let count = Number(input.shift())
    let planets = { attackCount: [], destroyedCounter: [] }
    let path = /[star]/gmi
    input.forEach((element, index) => {
        if (index < count) {
            (element.match(path)) ? maches = Number(element.match(path).length) : maches = 0
            let messages = element.split("").map((e) => String.fromCharCode(e.charCodeAt(0) - maches)).join("")
            let messagePathern = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<planet>\d+)[^@:!\->]*!(?<command>[AD])![^@:!\->]*->(?<atack>\d+)/gm
            let matchesPath = messagePathern.exec(messages)

            if (matchesPath) {
                let { name, planet, command, attack } = matchesPath.groups
                if (command == "A") {
                    planets.attackCount.push(name)
                } else if (command == "D") {
                    planets.destroyedCounter.push(name)
                }
            }
        }
    });
    console.log(`Attacked planets: ${(planets.attackCount.length)}`)
    if (planets.attackCount.length > 0) {
        planets.attackCount.sort((a, b) => a.localeCompare(b)).forEach(element => console.log(`-> ${element}`))
    }
    console.log(`Destroyed planets: ${planets.destroyedCounter.length}`)
    if (planets.destroyedCounter.length > 0) {
        planets.destroyedCounter.sort((a, b) => a.localeCompare(b)).forEach(element => console.log(`-> ${element}`))
    }
}