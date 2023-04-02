function SumOfOddNumbers(n){
    let sum = 0
    let counter = 0
    for(let i=1; i<=100;i++){
        if(i %2 !==0){
            console.log(i)
            counter ++ 
            sum+=i
        }
        
    
    if(counter % n === 0){
        console.log(`Sum: ${sum}`)
        break;
    }
    
    }
    
    }