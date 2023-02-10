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