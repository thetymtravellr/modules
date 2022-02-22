let age = 22;
age = 23;

const name = 'Robiul Hasan';

//default value
function calc( x, y, z = 0 ) {
    console.log(x,y,z);
}

calc(10,50);

//template string

const father = 'father';
const mother = 'mother';
const sister = 'sister';
function pet(param) {
    if(param === 'cat') {
        return 'Bilai';
    }
}
const myFamily = `I Live With My Family. There Are My ${father} , ${mother} , ${sister}, ${pet('cat')}`;

// arrow function

const getName = (first,last) => first + last;
const getName2 = name => name * 10;
const getName3 = () => 'Robiul Hasan';
const getName4 = (num1,num2,num3) => {
    const sum = num1 + num2;
    const diff = sum - num3;
    return diff;
}
console.log(getName4(4,5,3));

const arr = [43,45,5,3,332];

console.log(...arr);