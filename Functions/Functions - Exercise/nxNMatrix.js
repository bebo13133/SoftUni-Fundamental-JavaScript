function nxNMatrix(numberN) {
    const rowGeneration = () => {                 
        let output = '';                          
        for (let i = 0; i < numberN; i++) {       
            output += `${numberN} `;              
        }                                         
        return output;                             
    }
    for (let j = 0; j < numberN; j++) {
        console.log(rowGeneration(numberN));
    }
}
nxNMatrix(7);

/*
вариант 2 
function NxMatrix(number) {
    let rowGenerator = ()=> {
        let currentString = ""
        for (let k = 0; k < number; k++) {
            currentString += `${number} `
        }
return currentString
    }
    for (let i = 0; i < number; i++) {   
       console.log(rowGenerator())
    }
}
*/