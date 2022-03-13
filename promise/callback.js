'use strict';


function display(some) {
    console.log(some);
}

function calculator(num1,num2,callback) {
    let sum = num1 + num2;
    
    if(callback) callback(sum);
    
    return sum;
}

const result = calculator(5,5);


console.log('Line 1 code');
setTimeout(() => {
console.log('Line 2 code'); 
}, 2000);
console.log('Line 3 code');



/* 
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts)

 */