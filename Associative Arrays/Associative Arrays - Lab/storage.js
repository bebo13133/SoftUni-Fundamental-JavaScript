function storage(input) {

    let storageMap = new Map()

    for (const itemLine of input) {
        let [items, quantity] = itemLine.split(" ")
        quantity = Number(quantity)
        if (storageMap.has(items)) {

            quantity += storageMap.get(items)
        }
        storageMap.set(items, quantity)
    }

    for (const [items, quantity] of storageMap) {
        console.log(`${items} -> ${quantity}`)
    }


}