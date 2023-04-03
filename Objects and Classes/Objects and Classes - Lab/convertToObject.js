function convertToObject(input) {

    let obj = JSON.parse(input)

    for (let key of Object.keys(obj)) {

        console.log(`${key}: ${obj[key]}`)
    }



}