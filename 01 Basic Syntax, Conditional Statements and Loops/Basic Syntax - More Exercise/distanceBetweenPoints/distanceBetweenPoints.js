function solve(x1, y1, x2, y2) {

    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
  
    let distance = Math.sqrt(a * a + b * b);
    console.log(distance);
  }