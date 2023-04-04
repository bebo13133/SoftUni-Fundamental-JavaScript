function winningTicket(text) {

    let tickets = text.split(/\s*,\s*/g)//.map(ticket => ticket.trim());
    for (const ticket of tickets) {
        let ticketLength = ticket.length;
        if (ticketLength !== 20) {
            console.log('invalid ticket');
            continue;
        }

        let pattern = /(?=.{20}).*?(?=(?<ch>[@#$^]))(?<match>\k<ch>{6,}).*(?<=.{10})\k<match>.*/;
        let match = pattern.exec(ticket);
        if (match === null) {
            console.log(`ticket "${ticket}" - no match`);
            continue;
        }
        if (match !== null) {

            let matchingSymbol = match[1].substring(0, 1);
            let matchingSymbolLength = match[2].length;
            if (matchingSymbolLength < 10) {
                console.log(`ticket "${ticket}" - ${matchingSymbolLength}${matchingSymbol}`);
            }

            if (matchingSymbolLength === 10) {
                console.log(`ticket "${ticket}" - ${matchingSymbolLength}${matchingSymbol} Jackpot!`);
            }
        }
    }
}