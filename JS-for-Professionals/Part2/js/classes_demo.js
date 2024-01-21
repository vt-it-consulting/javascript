class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }

    greet() {
        console.log("Hi there! I'm", this.firstname);
    }

    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
    }
}

let dog = new Dog("Max", 20, "Brown", "Labrador");
console.log(dog)
dog.greet()
// compliment...
let compliment = dog.compliment("Harry", "hat");
console.log(compliment);

class Person {
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastname) {
        this.#lastname = lastname;
    }
}

// person
let p = new Person("Maria", "Saga");
console.log(p.firstname);

class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log("moving at", this.currentSpeed);
    }

    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }

    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();


// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }
// let dog = new Dog("Jacky", 30, "brown", "labrador");
// console.log(dog)

