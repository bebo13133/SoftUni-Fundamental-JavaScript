function replace(string) {
    let result = string.split("").reduce((a, b, i) => {
       return string[i-1] !== b ? (a += b) : a }, "")
    console.log(result);
}