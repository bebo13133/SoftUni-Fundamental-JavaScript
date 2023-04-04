function race(input) {
    let places = {}
    let winer = { 1: '1st', 2: '2nd', 3: '3rd' }
     input.splice(input.indexOf("end of race"), 1)
    let nameLine = input.shift().split(", ")
    input.forEach(line => {    
        let racer = line.match(/[A-Za-z]+/g).join("") 
        let distance = line.match(/\d/g).map(x => Number(x)).reduce((a, b) => a + b,0)
if(nameLine.includes(racer)){
        if (!places.hasOwnProperty(racer)) {places[racer] = [];
            places[racer] = 0;
        }
        places[racer] += distance
    }
    });
    let finalSort = Object.entries(places).sort((a, b) => b[1] - a[1]).forEach((x,i)=>{
            if(i<3)console.log(`${winer[i + 1]} place: ${x[0]}`)      
        })
    }