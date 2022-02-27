/* 
1. variable value not assigned
2. function but didn't write return anything
3. just wrote return but didnt return anything
4. parameter that isnt passed
5. property that doesnt exist in an object
6. accessing array element out of range
7. accessing deleted array element
*/

let first;
// console.log(first);

// function second(x,y) {
//     const sum = x + y;
//     if(b < 10) {
//         return;
//     }
//     const fun = a * b;
//     return sum;
// }

// const fourth = add(2,7);
// console.log(fourth);

// function double(a) {
//     const d = a * 2;
//     console.log(d);

// }

const fifth = {
    name: 'sogir',
    age: 15,
    location: 'bandorbon'
}
for (const prop in fifth) {
    console.log(prop);
}
console.log(fifth.phone);

const sixth = [4,6,6,24];
delete sixth[2];

console.log(sixth[2]);

const seventh = undefined;


const myObj = {name: 'samad', profession: null};

console.log(myObj);