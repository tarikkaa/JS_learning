import { Vechicle } from "./vechicle.js";

class Truck extends Vechicle{
    constructor(manufacturer, year, size, speed){
        super(manufacturer, "red", year);
        this.size = size;
        this.speed = speed;
    }
    static type = "truck";

    truckInfo(manufacturer) {
        manufacturer = this.manufacturer;
        console.log(`${manufacturer}'s properties are:
    manufacturer: ${this.manufacturer};
    type: ${this.type};
    color: ${this.color};
    year: ${this.year};
    speed: ${this.speed};
    size: ${this.size};\n`);
    }
    
    static truckSize = (mysize) => console.log(`(Truck static method)Truck size is ${mysize}`); 
}

let man = new Truck("man", 3030, 20, 300);
man.truckInfo();
Truck.truckSize(21);
console.log(`(Truck static property)Type is ${Truck.type}`);




