function amazingNumbers(num) {
    let sum = 0

    let strNumber = num.toString()

    for (let i = 0; i < strNumber.length; i++) {
        sum += Number(strNumber[i])
    }
    let result = sum.toString().includes('9')

    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False` )

}