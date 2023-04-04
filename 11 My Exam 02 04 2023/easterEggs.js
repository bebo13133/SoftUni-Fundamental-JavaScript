function easterEggs(input) {
    let string = input.shift()
    let path = /[@#]+(?<color>[a-z]{3,})[@#]+[^A-Za-z0-9]*[\/]+(?<digit>[\d]+)[\/]+/g

    let matches = string.matchAll(path)
    if (matches) {
        for (let match of matches) {
            if (match.groups.digit!==undefined && match.groups.color!==undefined) {
                console.log(`You found ${match.groups.digit} ${match.groups.color} eggs!`)
            }
        }
    }
}
easterEggs((['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']))