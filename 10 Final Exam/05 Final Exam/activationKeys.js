function activationKeys(input) {
    let key = input.shift()
    function contains(s) {
        key.includes(s) ? console.log(`${key} contains ${s}`) : console.log('Substring not found!')
    }
    function slice(a, b) {
        key = key.substring(0, a) + key.substring(b)
        console.log(key)
    }
    function raw(a, b, c) {
        let searchKey = key.substring(b, c)
        key = key.replace(searchKey,
            a === "Upper" ? searchKey.toLocaleUpperCase() : searchKey.toLocaleLowerCase())
        console.log(key)
    }
    let line = input.splice(0, input.indexOf("Generate")).forEach(el => {
        const [command, a, b, c,] = el.split(">>>").map(el => (isNaN(el) ? el : Number(el)))
        switch (command) {
            case "Slice": { slice(a, b) } break; case "Flip": { raw(a, b, c) } break;
            case "Contains": { contains(a) } break;
        }
    });
    console.log(`Your activation key is: ${key}`)
}