function pyramid(base1, increment1) {
    let base = Number(base1)
    let increment = Number(increment1)
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;

    let finalPyramidHeight = 0;
    let gold = 0
    let reduce = base;
    let stepCounter = 0;


    while (reduce > 1) {

        let marbel = (reduce * 4) - (4)
        let stone = (reduce * reduce) - marbel;
        stoneRequired += stone

        if (reduce - 2 === 0) {
            break;
        }
        stepCounter++

        stepCounter % 5 == 0 ? lapisLazuliRequired += marbel : marbleRequired += marbel



        reduce -= 2
    }
    stepCounter++

    gold = Math.ceil(reduce * reduce)

    finalPyramidHeight = Math.floor(stepCounter * increment);

    console.log(`Stone required: ${Math.ceil(stoneRequired * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${finalPyramidHeight}`);


}