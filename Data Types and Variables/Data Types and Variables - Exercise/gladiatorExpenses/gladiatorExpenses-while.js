function gladiatorExpenses(lostFight, helmet, sword, shield, iron) {

    shieldCounter = 0
    moneyForExpenses = 0
let fights = 1 
    while (fights <= lostFight) {
        if (fights % 2 === 0) {

            moneyForExpenses += helmet

        }
        if (fights % 3 === 0) {
            moneyForExpenses += sword
        }
        if (fights % 2 === 0 && fights % 3 === 0) {

            moneyForExpenses += shield

            shieldCounter++
        }

        if (shieldCounter % 2 === 0 && shieldCounter >0 ) {

            moneyForExpenses += iron
            shieldCounter = 0
        }
        fights++
    }
    

    console.log(`Gladiator expenses: ${ moneyForExpenses.toFixed(2)} aureus`)

}