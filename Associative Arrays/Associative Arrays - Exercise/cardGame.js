function cardGame(input) {
    let color = {'S': 4, 'H': 3,'D': 2,'C': 1,}
    let typeCard = {"J": 11, "Q": 12, "K": 13, "A": 14, }
    let playersResult = {}
    input.forEach(element => {[player, hand] = element.split(": ").map(h=> h.split(", "))
       
        if (!playersResult.hasOwnProperty(player))playersResult[player] = []
        
        playersResult[player].push(...hand)
    });

    Object.keys(playersResult)
        .forEach(keys => {
            let cardsHolder = new Set(playersResult[keys])
            let result = 0
            Array.from(cardsHolder)
                .forEach(hands => {
                    let el = hands.split("")
                    let colorHand = el.pop()
                    let typeHand = el.join("")
                    if (isNaN(typeHand)) {
                        typeHand = typeCard[typeHand]
                    }
                    result += color[colorHand] * Number(typeHand)
                });
            console.log(`${keys}: ${result}`)
        });
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])