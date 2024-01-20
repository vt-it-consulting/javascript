let a;
a ??= 10;
console.log(a); // Output: 10

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName: "John", lastName: "Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
cars.unshift("Renault")
cars.pop()

// Date object:
const date = new Date("2022-03-25");

console.log(cars)

// let text1 = "     Hello World!     ";
// let text2 = text1.trim();
// console.log(text2)

{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    text = text.replace("Cats", "Dogs");
    console.log(text)
    text = text.replaceAll("cats", "dogs");
    console.log(text)
}

{
    let text = "a:b:c:d:e:f";
    const myArray = text.split(":");

    console.log(myArray)
}


{
    let text = "Please locate where 'locate' occurs!";
    let res = text.search("locate");
    console.log(res)

}

