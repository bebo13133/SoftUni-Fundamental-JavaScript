function secretChat(input) {
    let message = input.shift();
 let line = input.splice(0,input.indexOf("Reveal")).forEach(element => {
      let [command, ...args] = element.split(":|:");
      if (command === "ChangeAll") {
        let [substring, replacement] = args;
        let regex = new RegExp(substring, 'g');
        message = message.replace(regex, replacement);
      } else if (command === "InsertSpace") {
        let index = args;
        message = message.substring(0, index) + " " + message.substring(index);
      } else if (command === "Reverse") { 
        if (message.includes(args)) {
          let i = message.indexOf(args[0]);
          let reversed = args[0].split("").reverse().join("");
          message = message.substring(0, i) + message.substring(i + args[0].length) + reversed;
        } else if(!message.includes(args)){
          return console.log("error")
       
        }
      }
      console.log(message);
    });
    console.log(`You have a new text message: ${message}`);
  }