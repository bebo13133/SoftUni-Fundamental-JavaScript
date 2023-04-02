function printAndSum(start, end) {
    let bul = ""
    let sum = 0;
    for (let i = start; i <= end; i++){
    bul+= i + " "
          
        sum+= i
    }
    console.log(bul)
    console.log(`Sum: ${sum}`)

}