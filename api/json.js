const user = {id: 11, name: 'hasan',job:'actor '}
const stringified = JSON.stringify(user);

const shop = {
    name: 'Alu Store',
    address: 'Dhaka',
    products: ['laptop','mobile','pepsi'],
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);


const converted = JSON.parse(stringified);
console.log(converted);