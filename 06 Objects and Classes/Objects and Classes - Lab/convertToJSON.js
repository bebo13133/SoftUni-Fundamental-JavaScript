function convertToJSON(fName, Lname, hairColor) {

    let personInfo = { fName, Lname, hairColor, }

    let person = JSON.stringify(personInfo)
    console.log(person)


}