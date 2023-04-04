function partyTime(input) {
    let partyList = { "vip": [], "regualer": [] }
    let partyTime = input.splice(0, input.indexOf('PARTY'))
    input.splice(1, input.length - 1).map(x => {
        if (partyTime.includes(x))
            partyTime.splice(partyTime.indexOf(x), 1);
    });
    partyList['vip'] = partyList['vip'].concat(partyTime.filter(x => !isNaN(x[0])))
    partyList['regualer'] = partyList['regualer'].concat(partyTime.filter(x => isNaN(x[0])));
    console.log(partyList['vip'].length + partyList['regualer'].length)
    Object.keys(partyList).map(el => {
        if (partyList[el].length > 0) partyList[el].map(x => { console.log(x) })
    })
}
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]
)
