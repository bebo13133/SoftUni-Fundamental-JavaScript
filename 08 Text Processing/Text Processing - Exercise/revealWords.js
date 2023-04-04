function revealWords(words, str) {
    let strLine = str.split(" ")
    words = words.split(", ").forEach(el => (strLine = strLine.map(y => (y.split("")
      .every(el => el === "*") && y.length === el.length ? el : y))));
    console.log(strLine.join(' '))
  }