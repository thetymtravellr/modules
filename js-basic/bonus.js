// function consoleNumber(i) {
//     if(i > 50) {
//         return;
//     }
//     console.log(i);
//     consoleNumber(i+1);
// }

// consoleNumber(1);

/* function consoleNumber(i) {
    if(i < 1) {
        return;
    }
    console.log(i);
    consoleNumber(i-1);
}

consoleNumber(10); */
// when we will do multiplication then we will take the default value 1
// & when will do addition then we will take default value as 0;
// let factorial = 1;
// for(let i = 4; i>= 1; i--) {
//     factorial = factorial * i;
// }

// console.log(factorial);
 
/* function factorial(i) {
    if(i == 1) {
        return 1;
    }
    return i * factorial(i--);
}

console.log(factorial(4)); */


const products = [
    {name: 'iphone 14', price: 90000},
    {name: 'iphone 13', price: 60000},
    {name: 'Galaxy S20', price: 100000},
    {name: 'dell laptop', price: 65000},
    {name: 'apple watch', price: 3500},
    {name: 'asus afsus 12', price: 2500},
    {name: 'samsung watch', price: 38000},
    {name: 'plus one phone', price: 20000},
];

for (const product of products) {
    if(product.price < 40000) {
        continue;
    }
    // console.log(product);
}
// for(const product of products) {
//     if(product.price < 5000) {
//         break;
//     }
//     console.log(product);
// }
// console.log('after the loop');
/* 
function searchProducts(products, searchText) {
    const result = [];
    for(const product of products) {
        if(product.name.includes(searchText)) {
            result.push(product);
        }
       
    }
    return result;
}

const match = searchProducts(products, 'dell');

console.log(match); */

const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
//  console.log(array[i]);
}
