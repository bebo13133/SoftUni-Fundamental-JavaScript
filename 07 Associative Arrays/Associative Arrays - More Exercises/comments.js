function comments(input) {
    let users = [];
    let articles = [];
  
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('article')) {
            let article = input[i].split(' ')[1];
            articles.push(article);
            delete input[i];                         
        } else if (input[i].includes('user')) {     
            let user = input[i].split(' ')[1];
            users.push(user);
            delete input[i];
        }
    }
    let comments = new Map();
    for (let e of input) {
        if (e !== undefined) {
            let tokens = e.split(': ');
            let user = tokens[0].split(' ')[0];
            let article = tokens[0].split(' ')[3];
            let commentContent = tokens[1].split(', ').join(' - ');
 
            if (users.includes(user) && articles.includes(article)) {
                let contentString = '--- From user ' + (user) + ': ' + (commentContent);
                if (!comments.has(article)) {
                    comments.set(article, []);
                }
                comments.get(article).push(contentString);
            }
        }
    }
    let sortedComments = [...comments.entries()]
    .sort((a, b) => b[1].length - a[1].length);
 
    for(let e of sortedComments){
        let article = e[0];
        let comments = e[1].sort((a, b) => b.substring(15).localeCompare(a.substring(15)));
        console.log(`Comments on ${article}`);
        for(let el of comments){
            console.log(`${el}`);
        }   
    }
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books',
    'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);