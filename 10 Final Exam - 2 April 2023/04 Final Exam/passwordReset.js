function passwordReset(input) {
    let passWord = input.shift()
    function odd() {
        passWord = passWord.split("").reduce((a, v, i) => {
            if (i % 2 !== 0) {
                a += v
            }
            return a }, "")
        console.log(passWord)
    }
    function cut(a, b) {
        passWord =  passWord.substring(0, a) +passWord.substring(a + b)
        console.log(passWord)
    }
    function substitute(b, c) {
        if(passWord.includes(b)){
            passWord = passWord.split(b).join(c)
            //Друг вариант
            // const y = new RegExp(b,'g')
            // passWord = passWord.replace(y,c)
            console.log(passWord)
        }else{
            console.log(`Nothing to replace!`)
        }
    }
    let ends = input.splice(input.indexOf("Done"))
    input.forEach(x => {
        let [command, b, c] = x.split(" ").map(x=> (isNaN(x)? x: Number(x)))
        switch (command) {
            case "TakeOdd":{odd(passWord)} break;
            case "Cut":{cut(b, c)}break;
            case "Substitute":{substitute(b,c)}break;
        }
    })
    console.log(`Your password is: ${passWord}`)
}