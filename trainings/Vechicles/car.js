
import { Vechicle } from "./vechicle.js";
import {Autopilot} from "./autopilot_option.js"


class Car extends Vechicle{
    constructor(manufacturer, color, year, speed, engine){
        super(manufacturer, color, year);
        this.speed = speed;
        this.engine = engine;
        this.type = "car";
        this.price = 3000;  
    }
    
    carInfo(manufacturer) {
        //super.patrentInfo();
        manufacturer = this.manufacturer;
        console.log(`${manufacturer}'s properties are:
    manufacturer: ${this.manufacturer};
    type: ${this.type};
    color: ${this.color};
    year: ${this.year};
    speed: ${this.speed};
    engine: ${this.engine};\n`);
    }
    
}

// Decorator 
let tesla = new Car("tesla", "black", 2022, 300, "benz")
tesla = new Autopilot(tesla);
tesla.getPrice();

/*
let cars = [
new Car("mers", "white", 2022, 210, "benzin"),
new Car("mazda", "black", 2023, 210, "diesel")
];
Vechicle.compareSpeed(cars[0], cars[1]);
*/

