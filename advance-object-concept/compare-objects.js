const first = {
    a:1
}
const second = {
    a:1
}
const third = first;

// if(first === third){
//     console.log('objects are equal');
// } else {
//     console.log('objects are different');
// // }
// console.log();
// console.log();
// if(JSON.stringify(first) === JSON.stringify(second)) {
// console.log('hello');
// }

function compare(first,second) {
    if(Object.keys(first).length !== Object.keys(second).length) {
        return true;
    }
}

const com = compare(first,second);
console.log(com);