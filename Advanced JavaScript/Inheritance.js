// function Dog(name, energy, breed) {
//     this.name = name
//     this.energy = energy
//     this.breed = breed
// }

// Dog.prototype.eat = function(amounnt){
//     console.log(`${this.name} is eating.`);
//     this.energy += amounnt
// }

// Dog.prototype.sleep = function(length){
//     console.log(`${this.name} is sleeping.`);
//     this.energy += length
// }

// Dog.prototype.play = function(length){
//     console.log(`${this.name} is playing.`);
//     this.energy += length
// }

// Dog.prototype.bark = function(){
//     console.log('Woof Woof');
//     this.energy -= 1
// }

// const charlie = new Dog('Charlie', 10, 'Goldendoodle')
// console.log(charlie);



class Animal {
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    }

    eat(amount){
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }
    sleep(length){
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    }
}

class Dog extends Animal{
    constructor(name, energy, breed){
        super(name, energy);
        this.breed = breed;
    }

    bark(){
        console.log("Woof-woof!");
        this.energy -= .1;
    }
}

var dog = new Dog("asdf", 100, "fdksl");
console.log(dog);