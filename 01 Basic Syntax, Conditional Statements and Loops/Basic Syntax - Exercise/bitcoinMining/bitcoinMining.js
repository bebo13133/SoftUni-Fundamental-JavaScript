function bitCoin(input) {

    let goldPrice = 67.51;
    let bitCoinPrice = 11949.16;
    let dayCounter = 0;
    let day = 0
      let totalGoldMoney = 0;
    let bitcoinSum = 0
    let bitCoinCounter = 0;

    for (let i = 0; i < input.length; i++) {
        dayCounter++
       let goldMoney = (Number(input[i]))

        

        if (dayCounter % 3 === 0) {
            goldMoney = goldMoney - (goldMoney*0.3)
            totalGoldMoney+= goldMoney * goldPrice
        }else{
            totalGoldMoney += goldMoney * goldPrice

        }


        if (totalGoldMoney >= bitCoinPrice) {

            bitCoinCounter = Math.floor(totalGoldMoney / bitCoinPrice)
            bitcoinSum += bitCoinCounter
            totalGoldMoney = totalGoldMoney - (bitCoinCounter * bitCoinPrice)


        }
        if (bitcoinSum > 0 && day === 0) {

            day=dayCounter
        }

    }

    console.log(`Bought bitcoins: ${bitcoinSum}`)
if(bitcoinSum>0){
    console.log(`Day of the first purchased bitcoin: ${day}`)
}
    console.log(`Left money: ${totalGoldMoney.toFixed(2)} lv.`)

}