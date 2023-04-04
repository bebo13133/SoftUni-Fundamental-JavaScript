function rageQuit(input = []) {
    let path = /[\D]+([\d]+)/g;
    input = input.shift().match(path);
    let pattern = /([\D]+)([0-9]+)/;
    let str = input.reduce((accum, element, index) => {
        let result = element.match(pattern);
        let sub = result[1].toUpperCase();
        let count = Number(result[2]);
        accum += sub.repeat(count)
        return accum
    }, "")
    let reduced = (new Set(str).size);
    console.log(`Unique symbols used: ${reduced}`);
    console.log(str);
}