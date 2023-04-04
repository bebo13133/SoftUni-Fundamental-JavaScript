function softUniStudents(array) {

    let obj = {};

    for (let el of array) {
        if (el.includes(': ')) {
            let [course, capacity] = el.split(': ');
            if (obj.hasOwnProperty(course) == false) {
                obj[course] = {
                    'capacity': Number(capacity),
                    'count': 0,
                    'users': {}
                }
                continue;
            }
            obj[course]['capacity'] += Number(capacity);
        }
        if (el.includes('with')) {
            let tokens = el.split(/[\[|\]]/g);
            let user = tokens.shift();
            let credit = tokens.shift();
            tokens = tokens[0].split(' ');
            let course = tokens.pop();
            let email = tokens[tokens.length - 2];

            if (obj.hasOwnProperty(course) && obj[course]['capacity'] !== 0) {
                if (obj[course]['capacity'])
                    obj[course]['users'][Number(credit)] = {
                        'user': user,
                        'email': email
                    };
                obj[course]['capacity']--;
                obj[course]['count']++;
            }
        }
    }
    let sorted = Object.entries(obj).sort((a, b) => b[1].count - a[1].count);
    for (let [course, information] of sorted) {
        console.log(`${course}: ${information.capacity} places left`);
        let sortedStudents = Object.entries(information['users'])
            .sort((a, b) => Number(b[0]) - Number(a[0]))
            .forEach(element => {
                console.log(`--- ${element[0]}: ${element[1]['user']}, ${element[1]['email']}`);
            });
    }
}