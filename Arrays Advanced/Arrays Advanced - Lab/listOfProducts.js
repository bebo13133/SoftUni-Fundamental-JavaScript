function listOfProducts(input) {
    input.sort().forEach((element,i) => {console.log(`${i+1}.${element}`)});
 }


 /*
Вариант 2
function listOfProducts(arr) {
    let obj = new Map
    for (const el of arr) {    
        obj.set(el)
    }
    let sortArr = Array.from(obj).sort().forEach((element,i) => {
        console.log(`${i+1}.${element.join("")}`);
    });
    }

 */