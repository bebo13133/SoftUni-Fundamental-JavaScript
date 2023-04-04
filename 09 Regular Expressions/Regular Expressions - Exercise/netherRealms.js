function netherRealms(input) {
    let object = {}
    let asciSum =  /([^\d\+\-*\/\.])/g
    let numSum = /([+|-]?[0-9]+[.]?[0-9]+|[+|-]?[0-9]+)/g
    let multiplyPath = /([\*\/])/g

    let newArr = input.split(/[, ]+/g)
    newArr.forEach((element, index) => {
        let health = 0
        let heroMaches = element.match(asciSum)
        if (heroMaches !== null) {        
            for (let i = 0; i < heroMaches.length; i++) {
                let code = heroMaches[i].charCodeAt(0)
                health += code
            }
        };
        object[element] = {health: health,}
        let damage = 0
        let damageMaches = element.match(numSum)
        if (damageMaches !== null) {
            damageMaches.forEach((element, index) => {
                if (index < damageMaches.length) {
                    damage += Number(element)
                }
            })
        }
        let multiplySymbol = element.match(multiplyPath)
        if (multiplySymbol !== null) {
            multiplySymbol.forEach((element,index) => {
                
                if (index < multiplySymbol.length) {
                    if (element === "*") {
                        damage *= 2
                    } else {
                        damage /= 2
                    }
                }
            })
        }
         object[element]["damage"] = damage.toFixed(2)
    });

 Object.entries(object).sort((a,b)=> a[0].localeCompare(b[0])).forEach(element=>
    console.log(`${element[0]} - ${element[1]["health"]} health, ${element[1]["damage"]} damage`))
}
netherRealms("M3ph1st0**, Azazel")