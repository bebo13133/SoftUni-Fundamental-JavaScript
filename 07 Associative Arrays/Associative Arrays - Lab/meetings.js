function meeting(input) {
    let meetings = {}

    for (let entrie of input) {
        let [date, name] = entrie.split(" ")
        if (meetings[date]) {
            console.log(`Conflict on ${date}!`)
        } else {
            meetings[date] = name
            console.log(`Scheduled for ${date}`)
        }
    }
    for (const [date, name] of Object.entries(meetings)) {
        console.log(`${date} -> ${name}`)
    }
}meeting(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George'])