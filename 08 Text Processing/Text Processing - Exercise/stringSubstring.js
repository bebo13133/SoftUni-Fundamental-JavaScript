function wordFinder(str1, str2) {
    let senctence = str2.split(' ').map(x => x.toLocaleLowerCase());
   senctence = (senctence.includes(str1.toLocaleLowerCase()) ? str1 : `${str1} not found!`);
    console.log(senctence)
}

/*
Вариант 2 
_________________

function stringSubstring (word, text) {

    text = text.split(' ');

    for(let token of text) {
        if(token.toLocaleLowerCase() == word.toLocaleLowerCase()){
            return word
        }
    }

    console.log(word, 'not found!');


}

*/