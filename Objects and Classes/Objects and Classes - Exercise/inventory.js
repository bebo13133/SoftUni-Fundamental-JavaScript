function inventory(arr) {
    arr.map(iterator => {
        let [name, level, items] = iterator.split(" / ").map(x => isNaN(x) ? x : Number(x))
        return {name,level,items}
    }).sort((a, b) => a.level - b.level).forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
  ]);
  