console.log("Hello world!");

let status = "new";
let scared = true;
if (status === "new") {
    console.log("Welcome to JavaScript!");
    if (scared) {
        console.log("Don't worry you will be fine!");
    } else {
        console.log("You're brave! You are going to do great!");
    }
} else {
    console.log("nothing to log")
}

if (typeof prompt !== 'undefined') {
    let result = prompt("Hi! How are you?");
    console.log(`your entered: ${result}`)
}


{
    var randomInt = Math.floor(Math.random() * 11);
    console.log(randomInt)

    let firstname = "Maria";
    firstname = "Jacky";
    console.log(firstname)

    let str = 'Hello, what\'s your name? Is it "Mike"?';
    console.log(str);
    let str2 = 'Hello, what\'s your name? Is it "Mike"?';
    console.log(str2);

    let binNr = 0b101; //decimal version would be 5
    console.log(binNr)

}

{
    let str1 = "JavaScript is fun!";
    let str2 = "JavaScript is fun!";
    console.log("These two strings are the same:", str1 === str2);

    let sym1 = Symbol("JavaScript is fun!");
    let sym2 = Symbol("JavaScript is fun!");
    console.log("These two Symbols are the same:", sym1 === sym2);

    let nb1 = Symbol(1)
    let nb2 = Symbol(2)
    console.log(nb1.valueOf())
    console.log("These two Symbols are the same:", nb1 === nb2);
}

{
    let unassigned;
    console.log(unassigned);
    let terribleThingToDo = undefined;
    console.log(terribleThingToDo)
}

{
    let str = "Hello";
    let nr = 7;
    let bigNr = 12345678901234n;
    let bool = true;
    let sym = Symbol("unique");
    let undef;
    let unknown = null;
    console.log("str", typeof str);
    console.log("nr", typeof nr);
    console.log("bigNr", typeof (bigNr));
    console.log("bool", typeof (bool));
    console.log("sym", typeof (sym));
    console.log("undef", typeof (undef));
    console.log("unknown", typeof (unknown));
}


{
    let nr1 = 2;
    let nr2 = "2";
    console.log(nr2 * nr1);
}

{
    arr1 = new Array("purple", "green", "yellow");
    arr2 = ["black", "orange", "pink"];
    arr1.push(1)
    arr1.unshift(1)
    arr1.shift()
    arr1.pop()

    console.log(arr1)
    let numbers = [1, 2, 3, 4, 5];
    let sum = numbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    console.log(sum)
}

{
    favoriteFruits = ["grapefruit", "orange", "lemon"];
    favoriteFruits.push("tangerine");
}

{
    let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
    arrOfShapes.splice(2, 0, "square", "trapezoid");
    console.log(arrOfShapes);
    arrOfShapes.splice(2, 2, "square", "trapezoid");
    console.log(arrOfShapes);

}

{
    arr8 = [ 2, 6, 7, 8, 10 ];
    let findValue = arr8.find(function(e) { return e === 6});
    let findValue2 = arr8.find(e => e === 10);
    console.log(findValue, findValue2);
}