
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key); // 'a', 'b', 'c'
}

const array = [10, 20, 30];
array.forEach(x => console.log(x))

for (let value of array) {
    console.log(value); // 10, 20, 30
}

// bug/988520-resolve-implementation-bulk-process-NEW
const array2 = [1, 2, 3];
array2.push(4)
array2.push(5)
array2.forEach(function(element) {
    console.log(element);
});

let i = 0;
let secondArray = [];
while (i < 5) {
    if(secondArray  != "undefined"){
        secondArray.push(i)
    }
    console.log(typeof(secondArray))
    console.log("current item is " + secondArray);
    i++;
}


console.log(getRandomInt(1,10));


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


let arr = [1, 2, 3];

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true (since Array inherits from Object)
console.log(arr instanceof Function); // false

let hexadecimalNumber = parseInt("1F", 16);
console.log(hexadecimalNumber); // 31


// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: "Yes"
