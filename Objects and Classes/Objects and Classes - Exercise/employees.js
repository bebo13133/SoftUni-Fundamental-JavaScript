function employees(data) {
    let list = {};

    data.forEach(personInfo => {
        list[personInfo] = personInfo.length
    });
    //console.log(list)
    for (let key in list) {

        console.log(`Name: ${key} -- Personal Number: ${list[key]}`)
    }

}