function minerTask(input) {
    let resource = {}
    for (let i = 0; i < input.length; i += 2) {
      if (!resource.hasOwnProperty(input[i]))
        resource[input[i]] = 0
      resource[input[i]] += Number(input[i + 1])
    }
    Object.entries(resource).forEach(key => console.log(`${key[0]} -> ${key[1]}`));
  }
  minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
  ])