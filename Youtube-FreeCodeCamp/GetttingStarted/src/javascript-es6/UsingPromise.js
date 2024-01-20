
const  apiUrl = "https://dummyjson.com/products";

function  getTopic(url){
    fetch(url)
        .then(x => x.json())
        .then( json =>{
            console.log(json)
        }).catch(error =>{
        console.log(error)
    })
}

 async function  getDataWithPromise(){

    try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

//getDataWithPromise()
//console.log(getTopic(apiUrl))

const exampleSet = new Set([1,2,3,4,5,6])
exampleSet.add(5)
exampleSet.add(6)
exampleSet.delete(1)
exampleSet.delete(6)
console.log(exampleSet)
console.log(exampleSet.size)

// exampleSet.clear()

console.log(exampleSet)
for (let item of exampleSet){
    console.log(item)
}