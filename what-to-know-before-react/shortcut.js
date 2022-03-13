/* 
falsy = 
false,0,null,undefind,NaN,''
truthy =
everything else
*/

const myVar = 'NaN';
if(myVar){
    console.log('myVar is truthy');
} else {
    console.log('myVar is falsy');
}

let myMoney = 50;
// check if myMoney is falsy anything
if(!myMoney) {
    console.log('You have no money');
} else {
    console.log('You have money');
}

const money = 80;
// let food;
// if(money > 100) {
//     food = 'biryani';
// } else {
//     food = 'cha biscuit';
// };
//ternery operator
const food = money > 100 ? 'biryani' : 'cha biscuit';
const dieting = true;
let drink = (money < 100 && dieting) ? 'water' : 'milk';

//number to string
const num1 = 52;
const numStr = num1 + '';

//string to number
const input = '52';
const inputNum = +input;

let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
//use && if the left side is true then right side will be executed
isActive && showUser();
//use || if the left side is false then right side will be executed
isActive || hideUser();
isActive = !isActive;