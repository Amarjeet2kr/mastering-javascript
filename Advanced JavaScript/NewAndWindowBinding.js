// new and Window Binding

// new Binding

let Cartoon = function(name, character) {
    this.name = name;
    this.character = character;
    this.log = function() {
        console.log(this.name +  ' is a ' + this.character);
    }
};

let tom = new Cartoon('Tom', 'Cat');
let jerry = new Cartoon('Jerry', 'Mouse');

console.log(tom);
console.log(jerry);


// // Window Binding
var sayAge = function(){
    console.log(this.age);
};

var me = {
    age: 25
};

// window.age = 35;
sayAge();
