/* const firstName = 'Robiul';
const lastName = 'Hasan';
let age = 23;

/* if(1>2){
    console.log('1 is greater than 2');
}else{
    console.log('1 is less than 2');
} */
/* if(1<2){
    console.log('1 is less than 2');
}else{
    console.log('1 is greater than 2');
} */
/* if(1===2){
    console.log('1 is equal to 2');
}else{
    console.log('1 is not equal to 2');
} */
/* if(1!==2){
    console.log('1 is equal to 2');
}else{
    console.log('1 is not equal to 2');
} */
/* if(1>=2){
    console.log('1 is equal to 2');
}else{
    console.log('1 is not equal to 2');
} */
/* if(firstName === 'Robiul' && lastName === 'Hasan'){
    console.log(`${firstName} ${lastName} is a developer`);
}else{
    console.log(`${firstName} ${lastName} is not a developer`);
} 

// if(age>=18){
//     console.log(`${firstName} ${lastName} is an adult`);
// } else if (age>=13){
//     console.log(`${firstName} ${lastName} is a teenager`);
// } else if (age>=0){
//     console.log(`${firstName} ${lastName} is a child`);
// } else {
//     console.log(`${firstName} ${lastName} is an infant`);
// }

*/
/*
//write an array of numbers
const array = [1,2,3,4,5,6,7,8,9,10];
// console.log(array.length);
// console.log(array.indexOf(2));
// console.log(array.includes(2));
array.push(11);
array.pop();

//write a for loop
for(let i=0; i<array.length; i++){
    // console.log(array[i]);
}  

//write a while loop
let i=0;
while(i<array.length){
    // console.log(array[i]);
    i++;
}

//write a do while loop
let j=0;
// do{
//     // console.log(array[j]);
//     // j++;
// }
// while(j<array.length);

//write a function
function greet(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`);
}
// greet('Robiul', 'Hasan');

// write a function that takes an array of numbers and returns the sum of all the numbers
function sum(array){
    let total = 0;
    for(let i=0; i<array.length; i++){
        total += array[i];
    }
    return total;
}
// console.log(sum(array));

//write a function expression
const square = function(number){
    return number*number;
}
// console.log(square(4));

//write a function that takes a string and returns the string in reverse
function reverse(string){
    let reversed = '';
    for(let i=string.length-1; i>=0; i--){
        reversed += string[i];
    }
    return reversed;
}
// console.log(reverse('Robiul'));

//write a arrow function
const squareArrow = (number) => {
    return number*number;
}
// console.log(squareArrow(4));

//write an object
const person = {
    firstName: 'Robiul',
    lastName: 'Hasan',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    },
    friends: [{
        firstName: 'John',
        lastName: 'Smith'
    },{
        firstName: 'Jane',
        lastName: 'Doe'
    }]
}
// console.log(person.address);

const people = [
    {
        firstName: 'Robiul',
        lastName: 'Hasan',
        age: 23,
    },
    {
        firstName: 'Habib',
        lastName: 'Wahid',
        age: 45
    }
]
    // console.log(people[1]);

// const str = `${person.firstName} ${person.lastName} is ${person.age} years old`;
const str = `${person.firstName} Has A Friend Named ${person.friends[1].firstName}`;

const array2 = [...array];
array.push(99);
// console.log(array, array2);

let array3 = array2.filter(function(item){
    return item > 5;
});

// console.log(array2);
// console.log(array3);

const zero = () => 9;
const one = inp => inp * 12;
const two = (a,b) => (a + b) / 4;
const multi = (a,b) => {
    let x = a + 5;
    let y = b + 5;
    return x * y;
}

let {firstName:fName, lastName:lName} = person;

console.log(fName); */


// const person = {
//     firstName: 'Robiul',
//     lastName: 'Hasan',
// };

// const {firstName, lastName} = person;
/* 
const array = [1,2,3,4,5,6,7,8,9,10];

const [,balance] = array;

let a = 'a';
let b = 'b';
const obj = {a,b}


const myFunc = (a = 1, b = 1) => a + b;

const person = {
    firstName: 'Robiul',
    lastName: 'Hasan',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    },
    friends: [{
        firstName: 'John',
        lastName: 'Smith'
    },{
        firstName: 'Jane',
        lastName: 'Doe'
    }]
}
const friendAge = person.friends[1]?.age;
console.log(friendAge); */


// const user = {
//     name: 'Robiul',
//     age: 23,
// }

// const userStringified = JSON.stringify(user);

// localStorage.setItem('user', userStringified);

// const getUser = localStorage.getItem('user');
// const parseUser = JSON.parse(getUser);


// const user2 = {
//     name: 'Hasan',
//     age: 21,
// }

// const user2Stringified = JSON.stringify(user2);

// sessionStorage.setItem('user2', user2Stringified);

// const getUser2 = sessionStorage.getItem('user2');

// const parseUser2 = JSON.parse(getUser2);


// console.log(parseUser2);


// console.log(location.hostname);
// console.log(location.port);
// console.log(location.protocol);
// console.log(location.href);
// console.log(location.search);
// console.log(location.hash);
// console.log(location.pathname);
// console.log(location.origin);
// console.log(location.assign('https://127.0.0.1:5500'));
// console.log(location.reload());
// console.log(location.replace('https://google.com'));

// console.log(history);
// console.log(history.state);
// console.log(history);
// console.log(history);
// console.log(history);
// console.log(history);
// console.log(history);
/* 
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => displayPhotos(data.slice(0,20)));
}

loadData();

const displayPhotos = photos => {
    const container = document.getElementById('container');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
        </div>
      </div>
        `;
        container.appendChild(div);
    });
}
*/
/* 
//creater an array of numbers
const numbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = numbers.map(number => number * 2);
console.log(newNumbers);
//map method is used to iterate over an array and return a new array with the results of the callback function for each item in the array 

//foreach method is used to iterate over an array but it doesn't return anything 

//filter method is used to iterate over an array with a condition. It returns a new array with the items that satisfy the condition else it returns an empty array.

//find method is used to iterate over an array with condition and return the first item that satisfies the condition else it returns undefined.
*/
const products = [
    {name: 'laptop', price: 82000, brand: 'HP', color: 'silver'},
    {name: 'phone', price: 25000, brand: 'samsung', color: 'black'},
    {name: 'watch', price: 3000, brand: 'swiss', color: 'golden'},
    {name: 'sunglass', price: 2000, brand: 'ray bon', color: 'black'},
    {name: 'camera', price: 48000, brand: 'canon', color: 'red'},
];

const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
// products.forEach(product => console.log(product.name));
const cheaperProducts = products.filter(product => product.price < 20000);
const productWithN = products.filter(product => product.name.includes('n'));
const findBlack = products.find(product => product.color === 'black');
const findN = products.find(product => product.name.includes('n'));

const person = {
    firstName: 'Robiul',
    lastName: 'Hasan',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    },
    friends: [{
        fName: 'John',
        lName: 'Smith'
    },{
        fName: 'Jane',
        lName: 'Doe'
    }]
}

// const { firstName } = person;
// const { lastName } = person;
const { firstName,lastName} = person;
const { firstName:fName,lastName:lName } = person;
const { friends: [{fName:friendFName,lName:friendLName}] } = person;

// const numbers = [4,5,2];
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];
// const [a,b,c] = numbers;
// const [a,,c] = numbers;

function boxify (num1,num2) {
    const nums = [num1,num2];
    return nums;
}


// console.log(brands);
// console.log(prices);
/*
const age = 23;
const isAdult = age >= 18 ? true : false;

let salary = 20000;
let saving = 100000;

// const canMarry = salary >= 15000 && saving >= 150000;
// const canMarry = salary >= 15000 || saving >= 150000;


const obj = {
    name: 'Robiul',
    age: 23,
}

const objStringified = JSON.stringify(obj);
localStorage.setItem('user', objStringified);

const getUser = localStorage.getItem('user');
const parseUser = JSON.parse(getUser);
console.log(objStringified);
console.log(parseUser);

 */

/*
let age = 22;
console.log(age);
age++;
console.log(age);
age++;
console.log(age);
age++;
console.log(age);
age++;
console.log(age);
age--;
console.log(age);

let sum = 5
sum += 10;
console.log(sum);
let add = 4;
add -= 2;
console.log(add);
*/
/*
const person = {
    firstName: 'Robiul',
    lastName: 'Hasan',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
}

const objKeys = Object.keys(person);
const objValues = Object.values(person);
const objEntries = Object.entries(person);

console.log(objEntries);
*/