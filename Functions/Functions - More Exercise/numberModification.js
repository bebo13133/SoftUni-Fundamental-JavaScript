function solve(n) {
    let nToString = n
      .toString()
      .split('')
      .map((x) => Number(x));
  
    let average = 0;
  
    while (avg(average) < 5) {
      nToString.push(9);
    }
  
    function avg(num) {
      let sum = 0;
  
      for (let i = 0; i < nToString.length; i++) {
        sum += nToString[i];
      }
      average = sum / nToString.length;
      return average;
    }
    console.log(nToString.join(''));
  }