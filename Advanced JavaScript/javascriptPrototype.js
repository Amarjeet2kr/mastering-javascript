// function Animal(name, engery) {
//     let animal = {}
//     animal.name = name
//     animal.energy = engery

//     animal.eat = function (amount) {
//         console.log(`${this.name} is eating`);
//         this.energy += amount
//     }

//     animal.sleep = function (length) {
//         console.log(`${this.name} is sleeping`);
//         this.energy += length
//     }

//     animal.play = function (length) {
//         console.log(`${this.name} is playing`);
//         this.energy -= length
//     }
//     return animal
// }

// const leo = Animal('Leo', 7)
// const snoop = Animal('Snoop', 3)

// console.log(leo);
// console.log(snoop);




// const parent = {
//     name: 'Stacey',
//     age: 35,
//     heritage: 'Irish'
// }

// const child = Object.create(parent)
// child.name = 'Ryan'
// child.age = 10

// console.log(child.name);
// console.log(child.age);
// console.log(child.heritage);




// function Animal(name, energy) {
//     let animal = Object.create(Animal.prototype)
//     animal.name = name
//     animal.energy = energy
    
//     return animal
// }

// Animal.prototype.eat = function(amount){
//     console.log(`${this.name} is eating.`);
//     this.energy += amount
// }

// Animal.prototype.sleep = function(length){
//     console.log(`${this.name} is eating.`);
//     this.energy += length
// }

// Animal.prototype.play = function(length){
//     console.log(`${this.name} is eating.`);
//     this.energy += length
// }

// const leo = Animal('Leo', 29)
// console.log(leo);
// console.log(leo.play());
// console.log(leo.sleep());


// class in javaScript

class Animal {
    constructor(name, energy){
        this.name = name
        this.energy = energy
    }

    eat(amount) {
        console.log(`${this.name} is eating.`);
        this.energy += amount
    }

    sleep(length){
        console.log(`${this.name} is sleeping.`);
        this.energy += length
    }

    play(length){
        console.log(`${this.name} is playing.`);
        this.energy -= length
    }
}

const leo = new Animal('Leo', 10)
const snoop = new Animal('Snoop', 20)

console.log(leo);
console.log(snoop);
console.log(leo.play(4));


console.log(Array.prototype);