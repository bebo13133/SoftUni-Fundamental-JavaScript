function addAstra(array){
    
    let pathern = /([#\|])(?<name>[a-zA-Z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g
    let result = []
    let sum=0
    let match = pathern.exec(array[0])
    
    while(match!== null){
        let date = match.groups.date
        let item = match.groups.name
        let cal = match.groups.cal
        sum+= Number(match.groups.cal)
        result.push([item, date, cal])
        match = pathern.exec(array[0])
    }
    console.log(`You have food to last you for: ${Math.floor(sum/2000)} days!`)
    result.forEach(x=> console.log(`Item: ${x[0]}, Best before: ${x[1]}, Nutrition: ${x[2]}`))
    }