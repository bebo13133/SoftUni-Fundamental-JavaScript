function companyUser(input) {
    let users = {}
    input.forEach(line => {
        [company, employe] = line.split(" -> ")
        if (!users.hasOwnProperty(company)) {
            users[company] = new Set()              //
        }                                           // Удобна за reduce
        users[company].add(employe)                 //
    });
  
    (Object.entries(users)).sort()
        .forEach(key => {
            console.log(key[0])
            for (let el of key[1]) {
                console.log(`--`, el)
            }
        })
}