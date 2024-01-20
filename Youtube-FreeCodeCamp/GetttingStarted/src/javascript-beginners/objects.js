var dog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "last name": "Nicky",
    "friends": ["every things"]
}
console.log(dog)

dog.name = "new name";
console.log(dog["name"])
console.log(dog["last name"])
console.log(dog.legs)
console.log(dog.friends.length)

var testObject = {
    1: "Namath",
    2: "Montana",
    3: "Unitas"
}

testObject.santa = "common"
testObject.newSanta;
testObject["skills"] = "Agile software developer"
console.log(testObject)


if (testObject.hasOwnProperty("santa")) {
    console.log("object testObject has property santa!")
    console.log(testObject.santa);
} else {
    console.log("NO PROPERTY CONTAIN!")
}

let playerNumber = 1;
console.log(testObject[playerNumber])
// delete  testObject.santa;
// delete  testObject["skills"];
// console.log(testObject)

var myMusic = [{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": ["CD", "8T", "LP"],
    "gold": true
},
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": ["CD", "8T", "LP"],
        "gold": true
    },
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": ["CD", "8T", "LP"],
        "gold": true
    }];

myMusic[0].artist = "Vincent Tene";

var content = JSON.stringify(myMusic)
var neObj = JSON.parse(content)
delete  neObj[0]
delete  neObj[1]
delete  neObj[2]
console.log(neObj)