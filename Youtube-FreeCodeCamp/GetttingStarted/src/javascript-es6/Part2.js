let example1 = [1, 2, 3, 4, 5, 6, 7]
let example2 = [8, 9, 10, 11, 12, 13]

let examples = [...example1, ...example2]
console.log(examples)

let add = (...allparms) => {

    let sum = 0;
    for (let val of allparms) {
        sum += val;
    }
    console.log(sum)
}

add(1, 2, 3, 4, 5, 6)

// array
let sayHello = (name = "Vincent Tene") => {
    console.log(`Say hello! ${name}`)
}

sayHello("Tene")


let numArray = [1,2,3,4,5,6,7,8,9,10]
console.log(numArray.includes(5))