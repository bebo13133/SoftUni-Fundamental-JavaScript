function factorialDivision(firstNum, secondNum) {

    function factorialCalculator(number) {
        let result = 1;
        while (number != 1) {
            result *= number;
            number -= 1;
        }
        return result;
    }
    let finalDivisionResult = factorialCalculator(firstNum) / factorialCalculator(secondNum);
    console.log(finalDivisionResult.toFixed(2));
}
factorialDivision(5, 2);


/*
Вариант 2 
function factorialDevision(num1, num2){
    function factiorialNum(num){
        let result = 1;
        for(let i = num; i>=1; i--){
            result *= i;
        }
        return result;
    }
    let firstResult = factiorialNum(num1);
  
    let secondResult = factiorialNum(num2);
  
    let finalResult = firstResult / secondResult;

    console.log(finalResult.toFixed(2));
}
*/