
// var
var x = 1;
if (x === 1) {
    let x = 12; // This 'x' is the same 'x' as above
    console.log(x); // 2
}
console.log(x); // 2 (function-scoped)

//
// try {
//     const z = 1;
//     data.name = "";
//     console.log(zz)
// }catch (e) {
//     console.log(e)
// }

var magic = () => new Date()

console.log(magic())

