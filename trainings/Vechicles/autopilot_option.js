

// This class is used as Decorator
export class Autopilot {
    constructor(car){
        this.car = car;
    }

    getPrice(){
        let new_price = this.car.getPrice() + 10000;
        return console.log(`New price with Autopilot option is: ${new_price}`)
    } 
}

