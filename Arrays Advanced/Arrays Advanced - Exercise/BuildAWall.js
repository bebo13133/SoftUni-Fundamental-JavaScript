function buildAWall(input) {

    let teams = input.map(Number)
    let priceConcrete = 0
    //console.log(teams)
    let totalConcrete = 0
    let dayConcrete = []
    let dayTeams = teams.filter(ele => ele < 30).length

    //console.log(crews)

    while (dayTeams !== 0) {
        let concreteTeam = 0
        for (let i = 0; i < teams.length; i++) {
            // console.log(teams[i])
            if (teams[i] !== 30) {
                teams[i] = teams[i] + 1
                concreteTeam += 195
                if (teams[i] == 30) {
                    dayTeams--
                }
            }
        }
        totalConcrete += concreteTeam
        dayConcrete.push(concreteTeam)

    }
    //console.log(dayConcrete)
    priceConcrete = totalConcrete * 1900

    console.log(dayConcrete.join(", "))
    console.log(`${priceConcrete} pesos`)

}