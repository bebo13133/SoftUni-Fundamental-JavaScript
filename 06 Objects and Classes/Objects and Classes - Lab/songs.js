function songs(arr) {
    let numberOfSongs = arr.shift();
    let typeSongs = arr.pop();

    class Song {
        constructor(name) {
            this.name = name;
        }
        song() {
            console.log(this.name);
        }
    }
    for (let el of arr) {
        let [typeList, songName] = el.split('_');

        if (typeList === typeSongs || typeSongs === 'all') {
            let currSong = new Song(songName);
            currSong.song();
        }
    }
}