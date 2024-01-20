import {add, divice, multiply, substract} from "./Calculator.js";
import {Car, Vehicle} from "./ClassDemo.js";

console.log(add(1,2));
console.log(divice(4,4));
console.log(multiply(4,5))
console.log(substract(20,2))

let  example = "Vincent"
console.log(example.padStart(10,"a"))
console.log(example.padEnd(10,"a"))



var car = new Car("BMW", "blue", "4")
car.print()
car.makeNoise()
console.log(car.metadata)

var vehicle = new Vehicle("BMW", "blue", "4")
vehicle.print()
vehicle.makeNoise()



function trailingComa(param1,){
    const example = {
        name: "Vincent",
    };

    console.log(example)
}

trailingComa()