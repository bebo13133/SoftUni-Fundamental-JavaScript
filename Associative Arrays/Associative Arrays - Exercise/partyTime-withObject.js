function partyTime(input){
   
    let partyList = {
        "vip": [],
        "regualer":[]
    }
   let partyTime = input.shift() 

while(partyTime !== 'PARTY'){
   let isValid = !isNaN(partyTime[0])
  if(isValid){
   partyList['vip'].push(partyTime)

   }else{
      partyList['regualer'].push(partyTime)
    }
    partyTime = input.shift() 
}
input.forEach(name => {
   
    if(partyList['vip'].includes(name)){
        let index = partyList["vip"].indexOf(name)
        partyList["vip"].splice(index,1)
    }else if (partyList['regualer'].includes(name)){
        let index = partyList["regualer"].indexOf(name)
        partyList["regualer"].splice(index,1)
    }

});
console.log(partyList['vip'].length + partyList['regualer'].length)
for (let vipGuest of partyList['vip']){
    console.log(vipGuest)
}
for (let regualerGuest of partyList['regualer']){
    console.log(regualerGuest)
}

}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)