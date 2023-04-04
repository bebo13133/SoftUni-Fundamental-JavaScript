function orders(product, num){
    let price=0
        switch(product){
            case "water": price = 1; break;
            case "coffee": price= 1.5; break;
            case "coke": price = 1.4; break;
            case "snacks": price=2; break;
    
        }
    return (price * num).toFixed(2)
      
    }
    orders('water', 5)