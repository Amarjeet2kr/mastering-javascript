
// concat() : used to join to string
const oldFriends = ["Jake", "Mikenzi", "Jessica"];
const newFriends = ["Merrik", "Cash"];

const friends = oldFriends.concat(newFriends);

console.log(oldFriends);
console.log(newFriends);
console.log(friends);



// addFriend(friends){
//     this.setState((prevState) => ({
//         friends: prevState.concat([friends])
//     }))
// }

// console.log(friends);



// every() : if all the satisfy then return true otherwise false
const ages = [18, 21, 28, 34, 22];
const groupCanVote = ages.every((age) => {
    return age >= 18;
});

const groupCanDrink = ages.every((age) => {
    return age >= 21;
});

console.log(groupCanVote);
console.log(groupCanDrink);



// return 10 empty array items

// const temp = Array(10).map(() => {
//     return doThing();
// });
// console.log(temp);



// filter()

const tweets = [
    {
        id: 1,
        stars: 13,
        text: 'Turns out "git reset --hard HEAD^" was a terrible idea.',
    },
    {
        id: 2,
        stars: 51,
        text: 'Clean code is subjective. Optimize for deletion.',
    },
    {
        id: 3,
        stars: 19,
        text: 'Maybe the real benefit of open sourc was the friendship we made along the way?',
    },
];

const popularTweets = tweets.filter((tweet) => {
    return tweet.stars > 50
});

console.log(popularTweets);


//find() : allow to find an element in an array
const tweet = tweets.find((t) => t.id === 3);
console.log(tweet);


// findIndex : return the index where the element is located
const index = tweets.findIndex((t) => t.id == 3)
console.log(index);



// // forEach() : invoke once each item in the array
// friends.forEach((friend) => addToDOM(friend));



// includes : check for particular value is found in an array or not
const dost = ["Jake", "Mikenzi", "Jacob"];
console.log(dost.includes("Jake"));
console.log(dost.includes("Karl"));


// const splitSentence = ["learn", "react", "at", "ui.dev"];
const splitSentence = ["learn", "react", "at", "ui.dev"];

console.log(splitSentence.join());
console.log(splitSentence.join(" "));


// map() : used to create new array from existing array based on some conditiion
const tweetIds = tweets.map((tweet) => tweet.id);
console.log(tweetIds);


// push()
splitSentence.push(".com");
console.log(splitSentence);

// pop()
splitSentence.pop(".com");
console.log(splitSentence);


function sum(arr) {
    return arr.reduce((total, num) => {
        return total + num;
    }, 0);
}

console.log(sum([1, 2, 3]));

// sort
console.log(ages.sort());