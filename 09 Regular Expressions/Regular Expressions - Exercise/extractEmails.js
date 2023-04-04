function mail(input){
    let path = /(?<!\S)[A-Za-z]+([\.\-\_]*[a-zA-Z]+)*@[A-Za-z]+([\.\-]*[a-zA-z0-9]+)*(\.([a-zA-z])+)/g
    // /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g
    let ppp = input.match(path).forEach(element => {console.log(element)});
    }