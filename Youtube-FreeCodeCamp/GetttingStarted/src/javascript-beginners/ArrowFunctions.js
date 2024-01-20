
const squareList = (arr) =>{

    const sqr = arr
        .filter(x => Number.isInteger(x) && x <= 10)
        .map(x => x*x);

    return sqr;
}


const sumArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let res = squareList(sumArray)

console.log(res)

function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3)); // Outputs 6
console.log(sum(1, 2, 3, 4, 5)); // Outputs 15


let price = 10;
let taxRate = 0.05;
let total = `The total price is: $${price * (1 + taxRate)}.`;
console.log(total);


let somedata = [1,2,3];

let [a,b,c] = somedata;
console.log(a)
console.log(b)

const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Web Developer'
};

const { name, age, occupation } = person;

console.log(name)
console.log(age)
console.log(occupation)
