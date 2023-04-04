function serialiceString(array) {
    let string = array[0];
  
    let arrOfChars = [];
  
    for (let i = 0; i < string.length; i++) {
      let charOne = string[i];
      let indexArr = [];
      if (arrOfChars.includes(charOne) == false) {
        for (let j = 0; j < string.length; j++) {
          let charTwo = string[j];
          if (charOne == charTwo) {
            indexArr.push(j);
          }
        }
        arrOfChars.push(charOne);
        console.log(`${charOne}:${indexArr.join("/")}`);
      }
    }
  }