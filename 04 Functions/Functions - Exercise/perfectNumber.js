function perfectNumber(number){
    let sum = 1;
    for(let i = 2; i <= number/2; i++){
        if(number % i == 0){
       sum += i;
        }
    }
    return sum === number ? `We have a perfect number!` : `It's not so perfect.`; 
}