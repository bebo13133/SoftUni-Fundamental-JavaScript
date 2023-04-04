function melrahShake(array) {
    let string = array[0];
    let pattern = array[1];
    while (pattern.length != 0) {
  
      let firstIndex = string.indexOf(pattern);
      let lastIndex = string.lastIndexOf(pattern);
  
      if (firstIndex > -1 && lastIndex > -1 && firstIndex !== lastIndex) {
        let firstPart = string.substr(0, firstIndex);
        let lastPart = string.substr(firstIndex + pattern.length);
        string = firstPart + lastPart;
        lastIndex = string.lastIndexOf(pattern);
        firstPart = string.substring(0, lastIndex);
        lastPart = string.substring(lastIndex + pattern.length);
        string = firstPart + lastPart;
        let pat1 = pattern.substring(0, pattern.length / 2);
        let pat2 = pattern.substring(pattern.length / 2 + 1);
        pattern = pat1 + pat2;
        console.log("Shaked it.");
      } else {
        break;
      }
    }
    console.log("No shake.");
    console.log(string);
  }