function piccolo(array) {
    let parking = {};
    function piccolo(input) {
        let parkingLIst = {}
        input.map(el => el.split(', ')).map(el => {
            if (el[0] === "IN") parkingLIst[el[1]] = el[1];
            else if (el[0] === 'OUT') delete parkingLIst[el[1]];
        });
        Object.entries(parkingLIst).sort().forEach(x => console.log(x[0]))
    }
}