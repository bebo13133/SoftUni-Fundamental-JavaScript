function storeProvision(stockItems, delivery) {

    let stockStore = {};
    let stockItemsLength = stockItems.length
    let deliveryLength = delivery.length
    for (let index = 0; index < stockItemsLength; index += 2) {
        let currentProduct = stockItems[index]
        stockStore[currentProduct] = Number(stockItems[index+1])

    }

let deliveryArr = []
for (let index = 0; index < deliveryLength; index += 2) {
    let currentProduct = delivery[index]
     Number(delivery[index+1])
    if(!stockStore.hasOwnProperty(currentProduct)){
        stockStore[currentProduct] =0
    }
    stockStore[currentProduct] +=Number(delivery[index+1])
    
}
for (const productName in stockStore) {
    console.log(`${productName} -> ${stockStore[productName]} `)
   
}

}