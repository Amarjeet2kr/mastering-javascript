// public : properties can be accessed outside of the class
class CoffeeMachine{
    waterAmout = 0;

    constructor(power){
        this.power = power
        console.log(`Created a coffee-machine, power: ${power}`);
    }
}

let CoffeeMachine = new CoffeeMachine(100);

CoffeeMachine.waterAmout = 200;



// private: prefixed with the # symbol

class CoffeeMachine{
    #waterLimit = 200;

    #fixWaterAmount(value){
        if(value < 0) return 0;
        if(value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value){
        this.#waterLimit = this.#fixWaterAmount(value)
    }
}

let coffeeMachine = new CoffeeMachine();
coffeeMachine.#fixWaterAmout(123); // error
coffeeMachine.#waterLimit = 300; //error








class Car{
    #milesDriven = 0;
    drive(distance){
        this.milesDriven += distance;
    }
    getMilesDriven(){
        return this.#milesDriven;
    }
}

const tesla = new Car();
tesla.drive(10);
console.log(tesla.milesDriven)