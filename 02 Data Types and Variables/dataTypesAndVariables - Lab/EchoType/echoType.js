function echoTypes(param){
    console.log(typeof param)
    
    typeof param =="string" || typeof param == "number"? console.log(param)
    :console.log('Parameter is not suitable for printing')
  
    }
    echoTypes(null)