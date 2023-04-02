function loginInv(input) {
 
    let username = input[0]
    let entry = ""
    let wrongEntry = 0
    for (let i = username.length - 1; i >= 0; i-- ) {
        entry += username[i]
    }
    for (let i =1; i <= input.length; i++) { 
        let currentEntry = input[i]

        if (currentEntry === entry) {
            console.log(`User ${username} logged in.`)
            break;
        } else{
            wrongEntry ++
            if(wrongEntry === 4){                
                console.log(`User ${username} blocked!`)
                break;

            }    
        }
                console.log ('Incorrect password. Try again.')   
    }

}