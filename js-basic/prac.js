//1. write 3 variable(number, string, boolean);

const str = 'Hasan';
const boolean = true;
const num = 23;

//2. 2 variables (let, const);

const birthYear = 1998;
let age = 23;
age = 24;

//3. +, -, *, /, %
const num1 = 5;
const num2 = 8;

const math = num2 % num1;

//4 & 5. comparison (>,<,==,!=,<=, >=) & two conditions.

const comparison = num1 >= num2;

let condition;

if(typeof str === "string" && typeof boolean === "number") {
    condition = 'or';
} else {
    condition = 'not';
}


let nums = 7;

while(nums <= 19) {
    // console.log(nums);
    nums += 2;

}


const arr = [1,2,3,4,5,6];

arr[4] = 99;

arr.push(55);
arr.unshift(33);
arr.pop();

for(const i of arr) {
    // console.log(i);
}

for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}


const obj = {
    name: 'Robiul',
    age: 23,
    salary: 0
}

obj.age = 24;
obj.salary = 1000


function feetToInch(feet) {

    const inch = feet * 12;

    return inch;
}

function centimeterToMeter(cm) {
    const meter = cm / 100;
    return meter;
}

function paperRequirements(itemOneQuantity,itemTwoQuantity,itemThreeQuantity) {
    const firstBook = 100;
    const secondBook = 200;
    const thirdBook = 300;

    const firstBookPages = itemOneQuantity * firstBook;
    const secondBookPages = itemTwoQuantity * secondBook;
    const thirdBookPages = itemThreeQuantity * thirdBook;

    const requirePages = firstBookPages + secondBookPages + thirdBookPages;

    return requirePages;

}
const friends = ['hasan','robiul','mojibor','hridoy','shahadat'];

function bestFriend(arr) {

    let longestName = arr[0];

    for(const char of arr) {
        if(char.length > longestName.length) {
            longestName = char;
        }
    }
    return longestName;
}


const array = [5,1,4,9,42,-6,8];

const newArr = [];

for(const i of array) {
    if(i >= 0) {
        newArr.push(i);
    } else if (i < 0) {
       break;
    }
}

console.log(newArr);
