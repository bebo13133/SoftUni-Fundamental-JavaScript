function phoneBook(input) {
    let  obj = input.reduce((acu, count) => {[user, phone] = count.split(" ")
      acu[user]=(phone); return acu },{})
     Object.entries(obj).map(x=>console.log(`${x[0]} -> ${x[1]}`))
 }


 //Втори вариант
 /*
function wordOccurrences(input) {

let obj={}
   input.forEach(element => {[user, phone] = element.split(" ")
        obj[user] = phone
    })
    Object.entries(obj).map(x=>console.log(`${x[0]} -> ${x[1]}`))
}

 */