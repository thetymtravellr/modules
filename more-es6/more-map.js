const friends = ['Tom Hanks','Tom Cruise','Tom Hardy'];

const friendsLength = friends.map(friends => friends.length);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'water glass', price: 20, color: 'transparent'},
];

const productsNames = products.map(product => product.name);
const productsPrices = products.map(product => product.price);

products.forEach(product => console.log(product.name));
