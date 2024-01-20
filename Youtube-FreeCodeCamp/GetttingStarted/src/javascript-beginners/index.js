// console.log("Hello from JavaScript");
//
// var number = 10;
// // this is a comment
// /*
// this is another comment
// */
//
//
// // Variables
// number = 20;
// console.log(number);
//
// var name = 'Beau';
// name = 4;
// console.log(name);
//
// let courseName = "Learn JavaScript"
// const pi = 3.14;
// console.log(pi);
//
//
// var a = null;
// var b = 2;
// console.log(a)
// console.log(b)
//
// a = 45;
// b = a;
// console.log(a)
//
// var a = 9;
// console.log(a);
//
// var a = false;
// var b = true;
// var c = "I`am a string";
//
// var studyCapVar;
// var properCamelCase;
// var consumptionPlan;
//
// var sum = 10 + 10;
// console.log(sum)
// console.log(++sum)
// console.log(--sum)
//
// var deciNumber = 89.44 * 45.4;
// var reminder = 11 % 3;
// console.log(reminder)
//
// a = a + 12;
// a *= 12;
//
// b = 9 + b;
// b *= 10;
// c += 6;
//
// var e = 12;
// e /= 12;
// console.log(e)
//
// var firstName = 'I am a "double quote string" inside "double quote" '
// var lastName = 'Tene'
// var fullName = firstName + " " + lastName;
// console.log(fullName)
// console.log(firstName)
//
// var href = `<a href="https://scrimba.com/scrim/cJ9vzbuW" />
//             another line
//             second line`
// console.log(href)
// let multiLineString = `This is a string
// that spans across
// multiple lines`;
// console.log(multiLineString)
// console.log(multiLineString.length)
// console.log(multiLineString[0])
//
//  let data = "Hallo data";
// let myStr = data[0];
// console.log(data[data.length-1])
//
// // let text = "Apple, Banana, Kiwi";
// // let part = text.slice(7, 13);
// // console.log(part)


let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");

console.log(index)

// Arrays:
var ourCars = [["Saab", "Volvo", "BMW"],["Saab", "Volvo", "BMW"],["Saab", "Volvo", "BMW"]] ;
ourCars.push(["Saab", "Volvo", "BMW"])
console.log(ourCars)


let cars = ["Saab", "Volvo", "BMW"];
cars.pop()
console.log(cars)


cars = ["Saab", "Volvo", "BMW"];
cars.shift();
console.log(cars)

cars.unshift("new Item")
console.log(cars)


