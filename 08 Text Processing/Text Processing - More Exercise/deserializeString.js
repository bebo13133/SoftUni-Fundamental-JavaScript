function deserializeString(array) {
    let arr = [];
  
    while (array[0] != "end") {
  
      let tokens = array.shift().split(":");
      let char = tokens[0];
      let indexes = tokens[1].split("/").map(Number);
  
      for (let i = 0; i < indexes.length; i++) {
          let index = indexes[i];
        if (index <= arr.length) {
          arr.splice(index,1 , char);
        } else {
            arr.length += index - arr.length;
            arr.splice(index, 0, char);
        }
  
      }
  
    }
    console.log(arr.join(''));
  }