function rotateArray(arr) {
    let n = Number(arr.pop())
    let rotation = n % arr.length
    for (let i = 0; i < rotation; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(" "))
}