// const number = -5;
// const output = Math.abs(number);

// const number = 2.5955;
// const output = Math.round(number); this will make it 3 if the number is above .5. if its below .5 then it will be 2.

// const output = Math.ceil(number); this will make it 3

// const output = Math.floor(number); this will make it 2

for (let i = 0; i < 20; i++) {
    let output = Math.ceil(Math.random() * 6);
    console.log(output);
}

let firstName = 'Robiul';
let lastName = 'Hasan';

console.log(firstName, lastName);
// destructuring

// let temp = firstName;
// firstName = lastName;
// lastName = temp;

[firstName , lastName] = [lastName, firstName];

console.log(firstName, lastName);