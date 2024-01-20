export class Car {
    constructor(engine, color, tires) {
        this._engine = engine;
        this._color = color;
        this._tires = tires;
        this.Engine = "Renault";
    }

    get metadata() {
        return "tires: " + this._tires + " color: " + this._color + " engine: " + this._engine;
    }

    print() {
        console.log(`Engine: ${this._engine}`);
        console.log(`Color: ${this._color}`);
        console.log(`Tires: ${this._tires}`);
    }

    makeNoise(sound = "Car Generic") {
        console.log(sound);
    }
}

export class Vehicle extends Car {

    constructor(engine, color, tires) {
        super(engine, color, tires);
    }

    makeNoise(sound = "Vehicle") {
        console.log(sound);
    }

}