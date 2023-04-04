function passwordGenerator(passData) {

    let allStrings = ((passData[0].concat(passData[1])).toLocaleLowerCase())
    let pass = passData[2].toLocaleUpperCase()
    let vowels = ["a", "e", "u", "i", "o"]
    let index = 0
    for (let chars of allStrings) {

        if (vowels.includes(chars)) {

            allStrings = allStrings.replace(chars, pass[index])
            index++
            if (pass[index] === undefined) {
                index = 0
            }
        }
    }
    let result = allStrings.split("").reverse().join("")
    console.log(`Your generated password is ${result}`)
}