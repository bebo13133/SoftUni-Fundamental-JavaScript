function rosettaStone(input) {
    const tempLenght = Number(input.shift());
    const template = [];
  
    for (let i = 0; i < tempLenght; i++) {
      const line = input.shift();
      template.push(line.split(' ').map(Number));
    }
  
    const matrix = [];
  
    for (let line of input) {
      matrix.push(line.split(' ').map(Number));
    }
    
    let result = '';
  
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        // current index position
        const index = matrix[row][col];
        // template overlay
        const templateDecoder = template[row % tempLenght][col % template[0].length];
        const output = ((index + templateDecoder) % 27) + 64;
        result += String.fromCharCode(output);
      }
    }
  
    const pattern = /@/g;
    result = result.replace(pattern, ' ');
    console.log(result);
  }
  