function furniturre(input) {
    let pursche = input.splice(input.indexOf("Purchase"))
    let totalPrice = 0
    let path = />>(?<product>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quant>\d+)/g
    console.log('Bought furniture:')
    for (let element of input) {
        let arr = element.matchAll(path);
        for (let el of arr) {
            totalPrice += (el.groups.price) * (el.groups.quant)
            console.log(el.groups.product)
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)

}