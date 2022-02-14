const phones = [
    {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    {name: 'walton m32', price: 15000, camera: 8, storage: 16},
    {name: 'nokia n95', price: 8000, camera: 5, storage: 4},
    {name: 'Iphone 10s', price: 85000, camera: 16, storage: 32},
    {name: 'htc h81', price: 25000, camera: 8, storage: 8}
];

let cheapest = phones[0];

// console.log(cheapest);
for(const phone of phones) {
    //compare price only
    if(phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);
// console.log(phones);