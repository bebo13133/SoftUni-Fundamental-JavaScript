function dark(input) {
    let rooms = input[0].split("|");
    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let isOver = false;

    for (let room of rooms) {
        roomCounter++;
        let commands = room.split(" ");
        let command = commands[0];
        let value = Number(commands[1]);

        switch (command) {
            case "potion":
                if (value + health > 100) {
                    value = value - (value + health - 100);
                }

                health += value;
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case "chest":
                coins += value;
                console.log(`You found ${value} coins.`);
                break;

            default:
                health -= value;
                (health > 0) ?console.log(`You slayed ${command}.`)
                   : (console.log(`You died! Killed by ${command}.`),
                    isOver = true,
                    console.log(`Best room: ${roomCounter}`));
                
                break;
        }
        if (isOver) {
            break;
        }
    }
    if (!isOver) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
console.log('----------------------------------------------------------------')
dark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])