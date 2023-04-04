function matchDates(input) {
    let path = /\b(?<day>\d{2})([\/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g
    let text = input.shift()
    let result = text.matchAll(path)
    for (let date of result) {
        console.log(`Day: ${date[1]}, Month: ${date.groups.month}, Year: ${date[4]}`)
    }
}


// Вариант 2 

/*
function matchDates(arr){
    let pattern = /(?<day>\d{2})([\/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    let validDates = [];      //arr[0].match(pattern);
    let text = arr[0];
 
    while((validDates = pattern.exec(text)) !== null){
        let day = validDates.groups['day'];
        let month = validDates.groups['month'];
        let year = validDates.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
 
}

*/