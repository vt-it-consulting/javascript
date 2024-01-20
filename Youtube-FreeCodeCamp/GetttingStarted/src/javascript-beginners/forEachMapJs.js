// Array of products, each with a name and price
const products = [
    {name: 'Apple', price: 0.95},
    {name: 'Orange', price: 0.80},
    {name: 'Banana', price: 0.70},
    {name: 'Mango', price: 1.50}
];

// forEach: Logging the names of all products
console.log('Product Names:');
products.forEach(product => console.log(product.name));


// map: Creating a new array containing the names of the products
const productNames = products.map(product => product.name);
console.log('Product Names Array:', productNames);

// filter: Creating a new array with only the products that cost more than $0.80
const expensiveProducts = products
    .map(x => x)
    .filter(product => product.price > 0.80);
console.log('Expensive Products:', expensiveProducts);

// reduce: Calculating the total price of all products
const totalPrice = products
    .reduce((total, product) => total + product.price, 0);
console.log('Total Price:', totalPrice.toFixed(2));