function treasureFinder(array) {
    let keySequense = array.shift();
  
    let result = [];
  
    while (array[0] != "find") {
      let string = array.shift();
      string = string.split("");
      let helpNumber;
      let arrOfKeys = keySequense.split(' ');
  
      for (let i = 0; i < string.length; i++) {
        let charCode = string[i].charCodeAt(0);
  
        for (let j = 0; j < arrOfKeys.length; j++) {
          let num = Number(arrOfKeys[j]);
          charCode -= num;
          helpNumber = arrOfKeys.shift();
          break;
        }
        let ch = String.fromCharCode(charCode);
        string.splice(i, 1, ch);
          arrOfKeys.push(helpNumber);
      }
      
      result.push(finding(string.join('')));
    }
  
    for(let el of result){
        if(el != undefined){
            console.log(el);
        }
    }
  
    function finding(string) {
      let patternType = /(?:&)(?<type>.+)(?:&)/g;
      let patternCoordinates = /<(?<coordinates>.+)>/g;
  
      if(string.match(patternType) && string.match(patternCoordinates)){
      let type = string.match(patternType);
      type = type[0].substring(1, type[0].length -1);
      let coordinates = string.match(patternCoordinates);
      coordinates = coordinates[0].substring(1, coordinates[0].length -1);
      return `Found ${type} at ${coordinates}`
      }
    }
  }