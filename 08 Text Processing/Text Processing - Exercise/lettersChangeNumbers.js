function lettersChangeNumbers(input) {
    let text = input.split(' ').filter(el => el !== '');
    let totalSum = 0;
    const getAlphabetPosition = (letter) => letter.charCodeAt(0) - 96;

    text.forEach(text => {
        let fistrLetter = text[0];
        let lastLetter = text.slice(-1);
        let number = Number(text.substring(1, text.length - 1));
        let firstPosition = getAlphabetPosition(fistrLetter.toLowerCase());
        let lastPosition = getAlphabetPosition(lastLetter.toLowerCase());
        let sum = 0;
        if (fistrLetter === fistrLetter.toUpperCase()) {
            sum = number / firstPosition;
        } else if (fistrLetter === fistrLetter.toLowerCase()) {
            sum = number * firstPosition;
        }
        if (lastLetter === lastLetter.toUpperCase()) {
            sum = sum - lastPosition;
        } else if (lastLetter === lastLetter.toLowerCase()) {
            sum = sum + lastPosition;
        }
        totalSum += sum;
    });
    console.log(totalSum.toFixed(2));
}
lettersChangeNumbers('P34562Z q2576f   H456z');


