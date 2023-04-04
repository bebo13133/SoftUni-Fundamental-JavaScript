function valueOfString(array) {
    let string = array.shift();
    let sum = 0;
  
    let patternLowerCase = /[a-z]+/g;
    let patternUpperCase = /[A-Z]+/g;
  
    if (array[0] == "LOWERCASE") {
      let matched = string.match(patternLowerCase);
      for (let chars of matched) {
        for (let char of chars) {
          char = char.charCodeAt(0);
          sum += char;
        }
      }
    } else if (array[0] == "UPPERCASE") {
      let matched = string.match(patternUpperCase);
      for (let chars of matched) {
        for (let char of chars) {
          char = char.charCodeAt(0);
          sum += char;
        }
      }
    }
  
    console.log("The total sum is:", sum);
  }