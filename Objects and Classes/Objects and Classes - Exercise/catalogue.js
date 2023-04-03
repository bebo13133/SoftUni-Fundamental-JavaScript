function catalogue(input) {
    let catalogueList = []

    input.forEach(element => {
        let [name, value] = element.split(" : ")
        let objProduct = {
            name: name,
            value: Number(value),
        }
        catalogueList.push(objProduct)
        })  
        //console.table(objProduct) 
        catalogueList.sort((a, b) => a.name.localeCompare(b.name))
        let letter = "";
        catalogueList.forEach(product => {
            if (product.name.charAt(0).toUpperCase() === letter) {
                console.log(`  ${product.name}: ${product.value}`)
            } else {
                letter = product.name.charAt(0).toUpperCase()
                console.log(letter)
                console.log(`  ${product.name}: ${product.value}`)
            }
        })
    };




catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)