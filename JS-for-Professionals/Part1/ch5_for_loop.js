// if (typeof prompt !== 'undefined') {
//     let number;
//     do {
//         number = prompt("Please enter a number between 0 and 100: ");
//     } while (!(number >= 0 && number < 100));
// }

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
for (const item of someArray) {
    console.log(item)
}

for (let index in someArray) {
    console.log(someArray[index])
}


if (typeof prompt !== 'undefined') {
    let number;
    do {
        number = prompt("Please enter a number between 0 and 100: ");
    } while (!(number >= 0 && number < 100));
}

let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
};

for (let key of Object.keys(car)) {
    console.log("key: " + key + ", value: " + car[key]);
}

let arrEntries = Object.entries(car);
console.log(arrEntries);