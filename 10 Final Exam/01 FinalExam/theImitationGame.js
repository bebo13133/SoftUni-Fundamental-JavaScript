function theImitationGame(input) {
    let secret = input.shift()
    let newArr = input.splice(0, input.indexOf("Decode"))
        .forEach(elem => {
            let [command, ...args] = elem.split("|")

            switch (command) {
                case "Move": {
                    let num = Number(args[0])
                    let firstPart = secret.substring(0, num)
                    let secondPart = secret.substring(num)
                    secret = secondPart + firstPart
                } break;
                case "Insert": {
                    let [index, token] = args
                    index = +index
                    let first = secret.substring(0, index)
                    let second = secret.substring(index)
                    secret = first + token + second
                } break;
                case "ChangeAll": {
                    let [substrings, replaced] = args
                    substrings = substrings.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
                    let regex = new RegExp(substrings, "g")
                    secret = secret.replace(regex, replaced)
                    // друг вариант 
                    //secret = secret.split(substrings).join(replaced)
                } break;
            }
        })
    console.log(`The decrypted message is: ${secret}`)
}