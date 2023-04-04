function softUniBarIncome(input) {
    let totalPrice = 0
    let path = /%(?<name>[A-Z][a-z]*)%.*<(?<product>\w+)>.*?\|(?<quant>\d+)\|.*?(?<price>-?\d+([\|\$\%\.]\d+)?)\$/
    input.slice(0, input.length - 1).forEach((element, index) => {
        if ((path.exec(element)) !== null) {
            let maches = path.exec(element)
            let sum = maches.groups.quant * maches.groups.price
            totalPrice += sum
            console.log(`${maches[1]}: ${maches[2]} - ${sum.toFixed(2)}`)
        }
    });
    console.log(`Total income: ${totalPrice.toFixed(2)}`)
}