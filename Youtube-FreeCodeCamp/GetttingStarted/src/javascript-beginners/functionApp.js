
var myglboal = 20;


function  calculate(x, y) {
   return  x + y;
}

function  calculate2(x, y) {
    let oops = 55;
    console.log(oops)
    return  x + y;
}

function  myLocalScope(){
    var myVar = 5;
    console.log(myVar)
}

const calculateArrow = (x, y) => x + y;


console.log(calculate(1,9))
console.log(calculate2(1,9))
console.log(calculateArrow(1,9))

myLocalScope();

if(typeof  oops != "undefined"){
    console.log(oops)
}

let data = "somoe";

var data1;
if(data1){
    console.log("data are inside!")
}
else{
    console.log("NO DATA ARE INSIDE!")
}

if(3 !== 4){
    console.log("3 === 3");
}else{
    console.log("Strict operator. condition failed!")
}

