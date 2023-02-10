var addfun = function(x, y){
    return x + y;
};

var add = (x, y) => {
    return x + y;
};

console.log(add(5, 10));



function getTweets(uid) {
    return fetch("//api.users.com/" + uid)
        .then((response) => response.json())
        .then((response) => response.data)
        .then((tweets) => tweets.filter((tweet) => tweet.stars > 50))
        .then((tweets) => tweets.filter((tweet) => tweet.rts > 50));
}


