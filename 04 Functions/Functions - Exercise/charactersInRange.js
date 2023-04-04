function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt())
    let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt())
    let chartsArray = []
    for (let charts = startChar + 1; charts < endChar; charts++) {
        let singleCharts = String.fromCharCode(charts)
        chartsArray.push(singleCharts)
    }
    console.log(chartsArray.join(" "))

}