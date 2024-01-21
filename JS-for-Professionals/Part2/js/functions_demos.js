function sayHello() {
    if (typeof(prompt) != 'undefined') {
        let you = prompt("What's your name? ");
        console.log("Hello", you + "!");
    }
}

console.dir( "history length: " +  window.history.length);
const ele1 = document.querySelector("h1");
console.dir("element found: " + ele1);

const eles = document.querySelectorAll(".output");
console.log("selector elements: " + eles);

let foundElement = document.getElementById("two");
console.log("element two: " + foundElement)

let rest = document.getElementsByTagName("div").item(1);
console.log("found elements div: " + rest)


function addFourNumbers(x, y, z, a) {
    console.log(x + y + z + a);
}
let arr = [5, 9];
let arr2 = [6, 7, 1, 4];
addFourNumbers(...arr, ...arr2);


function someFunction(param1, ...param2) {
    console.log(param1, param2);
}
someFunction("hi", "there!", "How are you?");

let addTwoNumbers = (x, y) => x + y;

let res = addTwoNumbers(9,1);
console.log(res)


function doingStuff() {
    if (true) {
        var local = "local";
    }
    console.log(local);
}
doingStuff();




function  use_function(){
    let varContainingFunction = function (a, b) {
        let varInFunction = "I'm in a function.";
        console.log("hi there!", varInFunction);

        console.log("a: " + a, " b: " + b)
    };

    varContainingFunction(1, 4)
    sayHello();


    let spread = ["so", "much", "fun"];
    let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
    console.log(message)


    const arr = ["squirrel", "alpaca", "buddy"];
    arr.forEach((e, index, arr) => console.log(e + ", : index: " + index));

}
