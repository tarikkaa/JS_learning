import { man } from "./truck.js";
import { Vechicle } from "./vechicle.js";
class Car extends Vechicle{
    constructor(manufacturer, color, year, speed, engine){
        super(manufacturer, color, year);
        this.speed = speed;
        this.engine = engine;
        this.type = "car";  
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

let cars = [
new Car("mers", "white", 2022, 210, "benzin"),
new Car("mazda", "black", 2023, 210, "diesel")
];
Car.compareSpeed(cars[0], cars[1]);

Car.compareSpeed(man.speed, cars[0]);