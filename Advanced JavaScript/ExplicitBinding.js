// Explicit Binding
// call, apply, bind

// using call: argument is passed one by one
var sayName = function(lang1, lang2, lang3){
    console.log('My name is ' + this.name + ' age is ' + this.age + ' '+ lang1 + ' ' + lang2 + ' ' + lang3);
};

var stacey = {
    name : 'stacy',
    age: 34
};

var languages = ['javaScript', 'Ruby', 'Python'];

sayName.call(stacey, languages[0], languages[1], languages[2]);



// using apply: argument is passed as array
var sayName = function(lang1, lang2, lang3){
    console.log('My name is ' + this.name + ' age is ' + this.age + ' '+ lang1 + ' ' + lang2 + ' ' + lang3);
};

var stacey = {
    name : 'stacy',
    age: 34
};

var languages = ['javaScript', 'Ruby', 'Python'];

sayName.apply(stacey, languages);



// using bind : return a new function which can be using to call sayName function
// same a call but return newfun
var sayName = function(lang1, lang2, lang3){
    console.log('My name is ' + this.name + ' age is ' + this.age + ' '+ lang1 + ' ' + lang2 + ' ' + lang3);
};

var stacey = {
    name : 'stacy',
    age: 34
};

var languages = ['javaScript', 'Ruby', 'Python'];

var newfun = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('HERE');
newfun();