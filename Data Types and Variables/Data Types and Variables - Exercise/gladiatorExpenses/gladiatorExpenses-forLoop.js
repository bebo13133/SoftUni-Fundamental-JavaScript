function gladiatorExpenses(lostFight, helmet, sword, shield, iron) {

    shieldCounter = 0
    moneyForExpenses = 0
    for (let i = 1; i <= lostFight; i++) {
        if (i % 2 === 0) {
            moneyForExpenses += helmet
        }
        if (i % 3 === 0) {
            moneyForExpenses += sword
        }
        if (i % 2 === 0 && i % 3 === 0) {

            moneyForExpenses += shield
            shieldCounter++
        }
        if (shieldCounter % 2 === 0 && shieldCounter >0 ) {
            moneyForExpenses += iron
            shieldCounter = 0
        }
    }
    console.log(`Gladiator expenses: ${ moneyForExpenses.toFixed(2)} aureus`)

}