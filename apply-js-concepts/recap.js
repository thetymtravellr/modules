'use strict';

var time = '10:15pm';
var price = 120;
var isWhiteColor = false;

// array 
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();
partners.unshift('hajit');
partners.shift();

//conditionals

// if (price < 120) {
//     console.log('I will buy this book');
// } else {
//     console.log('Mama, Kichu Discount Denna');
// }

//loop

var i = 0;
while(i <= 17) {
    //do some work
    // console.log(i);
    i++;
}

for (let i = 0; i < 10; i++) {
    // console.log(i);
}

//function

function isMoonUp(time) {
    if(time >= 19 && time <= 5) {
        return true;
    } else {
        return false
    }
}

// let const 

// value of variable could change

let bookPrice = 27;
bookPrice = 29;
bookPrice = 35;

// value of variable couldn't change

const myName = 'lal e lal mr. Helal'
