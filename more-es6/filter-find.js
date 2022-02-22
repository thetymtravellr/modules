const numbers = [85,75,44,1,5,2,4];

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'water glass', price: 20, color: 'transparent'},
];

const bigNum = numbers.filter(num => num > 20);
const smallNum = numbers.filter(num => num < 20);

const small2 = numbers.map(num => num < 20);

const expensive = products.filter(product => product.price > 100);

const blacks = products.filter(product => product.color === 'black');

const white = products.find(product => product.color == 'black');

console.log(white);