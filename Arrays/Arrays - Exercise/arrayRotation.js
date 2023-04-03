function arrayRotation(arr, rotacion) {
    let buff = []
    for (let i = 0; i < rotacion; i++) {
        arr.push(arr.shift())
}
console.log(arr.join(' '))
}