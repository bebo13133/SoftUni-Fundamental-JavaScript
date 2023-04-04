function gramophone (albumName, bandName, song){
    let time = (albumName.length * bandName.length) * song.length/2

    let rotations= Math.ceil(time/2.5)

    console.log(`The plate was rotated ${rotations} times.`)

}