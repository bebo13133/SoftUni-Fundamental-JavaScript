function oddOccurrences(input) {
    let elements = input.split(' ');
    let myWords = new Map();// ако е с обект реда се нарушава 
  
    for (let word of elements) {
      let lowerCased = word.toLowerCase();
      if (!myWords.has(lowerCased)) {
        myWords.set(lowerCased, 0);
      }
      myWords.set(lowerCased, myWords.get(lowerCased) + 1);
    }
  
    let getOdds = Array.from(myWords).filter((a) => {
      return a[1] % 2 !== 0;
    });
  
    let result = [];
    getOdds.forEach((a) => result.push(a[0]));
    console.log(result.join(' '));
  }