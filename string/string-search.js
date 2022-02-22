const products = [
    'dell hardcore i29 200gb laptop',
    'iphone 1tb smart phone',
    'dell apple airpad laptop',
    'hp thinkpad laptop',
    'dell samsung laptop'
];

const searching = 'laptop';

const output = [];

// search with index of

// for(const product of products){
//     if(products.indexOf(searching) != 1) {
//         output.push(product);
//     }
// }

// console.log(output);

//search with includes

// for(const product of products) {
//     if(product.toLowerCase().includes(searching.toLowerCase())) {
//         output.push(product);
//     }
// }

// search with start with

// for(const product of products) {
//     if(product.toLowerCase().startsWith(searching.toLowerCase())) {
//         output.push(product);
//     }
// }

//search with ends with

for(const product of products) {
    if(product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);