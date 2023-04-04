function worldTour(input){
    let stops = input.shift()
    function addStop(a,c){
if (stops[a]!== undefined){
    stops = stops.substring(0,a) + c + stops.substring(a) 
}
    }
    function remove(a,c){
if(stops[a]!== undefined && stops[c]!== undefined)
    stops = stops.slice(0,a) + stops.slice(c+1)

    }
    function switchS(a,c){
if(stops.indexOf(a)!== -1){
    let regex = new RegExp(a,"g")
    stops = stops.replace(regex,c)
}
    }



    let travels =  input.splice(0,input.indexOf("Travel")).forEach(x => {
        let [comand,a,c] = x.split(":").map(x=>(isNaN(x)?x:Number(x)))
     switch(comand){
        case "Add Stop":{
            addStop(a,c)
        }break;
        case "Remove Stop":{
            remove(a,c)
        }break;
        case "Switch":{
            switchS(a,c)
        }break;
     }
        console.log(stops)
    });
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}