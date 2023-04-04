function towns(input){
 
    for(let lines of input){
        let line = lines.split(" | "); 
       let obj = {
        town: line[0],
        latitude: Number(line[1]).toFixed(2),
        longitude: Number(line[2]).toFixed(2)
       }
       console.log(obj)
 
    }
}