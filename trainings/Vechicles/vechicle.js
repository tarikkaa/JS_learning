
export class Vechicle {
    constructor(manufacturer, color, year){
        this.manufacturer = manufacturer;
        this.color = color;
        this.year = year;
        this.price = 2000;
    }
    static compareSpeed(sp1, sp2){
        let speed = sp1 === sp2;
        console.log(`(Vechicle static method) Speed of two cars is the the same: ${speed}`)
        return speed;
    }
    patrentInfo(){console.log(`The properties taken from parent are only:
    manufacturer: ${this.manufacturer};
    color: ${this.color};
    year: ${this.year};`);
    }    

    getPrice(){
        return this.price;
    }
}













