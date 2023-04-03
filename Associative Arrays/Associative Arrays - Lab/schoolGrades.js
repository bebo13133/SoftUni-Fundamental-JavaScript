function schoolGrades(input) {
    let students = {}
    input.map(line => {
        let studentInfo = line.split(" ")
        let name = studentInfo.shift()
        let grades = studentInfo.map(x => Number(x));
        if (!students[name]) students[name] = [];
        students[name] = students[name].concat(grades);
    });
    Object.entries(students).sort((a, b) => a[0].localeCompare(b[0])).map((grade) => {
        let sum = 0; grade[1].forEach(grades => sum += grades)
        let avarageGrade = grade[1].reduce((a, b) => a + b, 0) / grade[1].length
        console.log(`${grade[0]}: ${avarageGrade.toFixed(2)}`)
    });
}