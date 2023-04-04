function destination(input) {
    let pattern = /([=||\/])(?<name>[A-Z][A-Za-z]{2,})\1/g
    let destArr = [];
    let travelPoints = 0;
    let match = input.match(pattern);
    if (match) {
        match.map(matches => {
            let destination = matches.slice(1, -1);
            travelPoints += destination.length;
            destArr.push(destination);

        })
    }
    console.log(`Destinations: ${destArr.join(", ")}`)
    console.log(`Travel Points: ${travelPoints}`)

}