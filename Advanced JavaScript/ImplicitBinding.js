// var sayName = function(name){
//     console.log('Hello, ' + name);
// };
// sayName('Amarjeet');


//Implicit Binding
// left of the DOt at call time

// var me = {
//     fname : 'Amar',
//     aga : 22,
//     sayName: function () {
//         console.log(this.fname);
//     }
// };
// me.sayName();



// var sayNameMixin = function (obj) {
//     obj.sayName = function(){
//         console.log(this.name);
//     }
// }
// var me = {
//     name : 'Tyler',
//     age : 21
// };

// var you = {
//     name : 'Joe',
//     age : 23
// };

// sayNameMixin(me);
// sayNameMixin(you);

// me.sayName();
// you.sayName();



var Person = function(name, age){
    return {
        name: name,
        age: age,
        sayName : function(){
            console.log(this.name);
        },
        mother: {
            name : 'Stacey',
            sayName: function() {
                console.log(this.name);
            }
        }
    };
};

var jim = Person('Jim', 43);
jim.sayName();
jim.mother.sayName();