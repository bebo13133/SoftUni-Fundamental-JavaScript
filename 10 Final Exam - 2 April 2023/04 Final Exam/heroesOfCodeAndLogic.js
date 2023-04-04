function heroesofCodeAndLogic(input) {
    let hero = {}
    let heroLine = input.splice(0, input.shift()).map(line => {
        let [name, hp, mp] = line.split(" ").map(x => isNaN(x) ? x : Number(x))
        if (!hero.hasOwnProperty(name)) hero[name] = { hp, mp }
    })
    let comandLine = input.splice(0, input.indexOf("End")).forEach(element => {
        let [comand, a, b, c] = element.split(" - ").map(x => isNaN(x) ? x : Number(x))
        switch (comand) {
            case "Heal": heal(a, b); break;
            case "Recharge": recharge(a, b); break;
            case "TakeDamage": damage(a, b, c); break;
            case "CastSpell": spell(a, b, c); break;
        }
    });
    function heal(a, b) {
        let reffil = Math.min(100 - hero[a].hp, b)
        hero[a].hp += reffil
        console.log(`${a} healed for ${reffil} HP!`)
    }
    function recharge(a, b) {
        let reffil = Math.min(200 - hero[a].mp, b)
        hero[a].mp += reffil
        console.log(`${a} recharged for ${reffil} MP!`)
    }
    function damage(a, b, c) {
        hero[a].hp -= b
        if (hero[a].hp > 0) {
            console.log(`${a} was hit for ${b} HP by ${c} and now has ${hero[a].hp} HP left!`)
        } else {
            console.log(`${a} has been killed by ${c}!`)
            delete hero[a]
        }
    }
    function spell(a, b, c) {
        if (hero[a].mp >= b) {
            hero[a].mp -= b
            console.log(`${a} has successfully cast ${c} and now has ${hero[a].mp} MP!`)
        } else { console.log(`${a} does not have enough MP to cast ${c}!`) }
    };
    for (let key in hero) { console.log(`${key}\n  HP: ${hero[key].hp}\n  MP: ${hero[key].mp}`) }
}