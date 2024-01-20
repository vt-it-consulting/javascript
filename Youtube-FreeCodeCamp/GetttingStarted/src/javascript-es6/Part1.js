
let word1 = "Vincent"
let word2 = "Tene";

const fullname = `The full name is ${word1} ${word2} ${45 - 6}`;
console.log(fullname)

let multilines = `This 
is a multiple string in ES6` ;

console.log(multilines)


var personalInformation = {
    firstName : "Vincent",
    lastName : "Tene",
    age: 46,
    city : "Calw",
    profession: "Software engineer"
};

const {firstName, lastName, age } = personalInformation;

console.log(firstName + ", lastName: " + lastName + ", age: " + age)
console.log(firstName)

let names = ["Vincent", "De", "Paul"]
let [first, last] = names;
console.log(first)
console.log(last)


function addressMaker(city, state, country){
    const adddress = {city,state, country};
    console.log(adddress)
    console.log(adddress instanceof Object)
}

addressMaker("Calw", "Baden Württenberg", "DE")

// for of loop
let incomes = [1000,2000,3000,4000,5000]
for (const income of incomes){
    console.log(income)
}

//
let fullnames = ["vincent","tene","kengne","de"]
for (const item of fullnames){
    console.log(item)
}
let myfullName = "Vincent De Paul Tene Kengne";
for (const item of myfullName){
    console.log(item)
}
//document.getEleme1ntById("example").innerText = multilines;

