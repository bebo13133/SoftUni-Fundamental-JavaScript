function formatGrade(grade) {

    let gradeText = "";

    if (grade < 3) {
        gradeText = "Fail"

    } else if (grade < 3.50) {
        gradeText = "Poor"

    } else if (grade < 4.50) {
        gradeText = "Good"
    } else if (grade < 5.50) {
        gradeText = "Very good"
    } else {
        gradeText = "Excellent";
    }

    (gradeText === "Fail") ? console.log('Fail (2)') : console.log(`${gradeText} (${(grade).toFixed(2)})`)

}