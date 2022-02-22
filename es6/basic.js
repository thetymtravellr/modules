// variable
var deposit = 400;
// condition
if(deposit > 500){}
if(deposit < 200){}
else if(deposit == 500){}
else if(deposit != 500){}
if(deposit >= 500){}
if(deposit <= 500){}
else {}
// array
const arr = [];
let numbers = [5,7,1,8,2,5,6,5];
var sum = [] // we should never use var
numbers.length; //check how many items are inside the array
numbers.pop();// remove first item
numbers.push(111); // add a element to the last
numbers[2] = 44; // change the 2 index number
//check whether 222 included in array
if(numbers.indexOf(222) != -1) {}
// checking in a simple way
if(numbers.includes(222)){}

//loop
//while,for
for(const number of numbers) {} // for of
for(let i = 0; i < numbers; i++) {} // for

let i = 0;

while(i < numbers) { 
    i++
}

//functions
function fullName(first,last){
    const name = first + last;
}

const person = fullName('Rahim', 'Ali');

//object

const person = {
    firstName: 'Rahim',
    lastName: 'Ali'
}