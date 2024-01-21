let s = "Hello";
console.log(
    s.concat(" there!")
        .toUpperCase()
        .replace("THERE", "you")
        .concat(" You're amazing!")
);

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);


let str_int = "6";
let int_int = parseInt(str_int);
console.log("Type of ", int_int, "is", typeof int_int);

let str_float = "7.6";
let int_float = parseInt(str_float);
console.log("Type of", int_float, "is", typeof int_float);
let str_binary = "0b101";
let int_binary = parseInt(str_binary);
console.log("Type of", int_binary, "is", typeof int_binary);


{
    let arr = ["grapefruit", 4, "hello", 5.6, true];
    function printStuff(element, index) {
        console.log("Printing stuff:", element, "on array position:", index);
    }
    arr.forEach(printStuff);
}


{
    let arr = [1, 2, 3, 4];
    let mapped_arr = arr.map(x => x + 1);
    console.log(mapped_arr);
}

{
    let result = "Hello JavaScript Vincent Tene Kengne";
    let arr_result = result.split(" ");
    console.log(arr_result);
}

{
    let favoriteFruits = "strawberry#watermelon#grapefruit#data#software";
    let arr_fruits = favoriteFruits.split("#");
    console.log(arr_fruits);
}

{
    let currentDateTime = new Date();
    console.log(currentDateTime);
}