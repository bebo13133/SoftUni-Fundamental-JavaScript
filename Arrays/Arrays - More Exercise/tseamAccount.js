function tseamAccount(input) {

    let petersGame = input.shift().split(' ');
    let line = input.shift();

    while (line !== 'Play!') {

        let [command, game] = line.split(' ');

        if (command === 'Install') {
            if (!petersGame.includes(game)) {
                petersGame.push(game);
            }
        } else if (command === 'Uninstall') {
            if (petersGame.includes(game)) {
                let gameIndex = petersGame.indexOf(game);
                petersGame.splice(gameIndex, 1);
            }
        } else if (command === 'Update') {
            if (petersGame.includes(game)) {
                let gameIndex = petersGame.indexOf(game);
                let currentGame = petersGame.splice(gameIndex, 1).join('');
                petersGame.push(currentGame);
            }
        } else if (command === 'Expansion') {
            let [gameEx, exp] = game.split('-');
            if(petersGame.includes(gameEx)){
                let index = petersGame.indexOf(gameEx);
                let expansion = gameEx + ':' + exp;
                petersGame.splice(index + 1,0,expansion);
            }
        }
        line = input.shift();
    }
    console.log(petersGame.join(' '));
}
// tseamAccount([
//     'CS WoW Diablo',
//     'Install LoL',
//     'Uninstall WoW',
//     'Update Diablo',
//     'Expansion CS-Go',
//     'Play!']);


tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
);