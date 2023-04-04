function sorting(input){
    let newArr= input.slice()
        newArr.sort((a,b)=>a-b)
    let result=[]
 
      while(newArr.length!==0){
    result.push(newArr.pop([newArr.length-1]))
    result.push (newArr.shift(0))
      }
    console.log(result.join(" "))
    
    }