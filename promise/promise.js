'use strict';

const paymentSuccess = true;
const marks = 80;

function enroll(){
    console.log('Course enrollment is in progress.');

    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(paymentSuccess) {
                resolve();
            } else {
                reject('Payment Failed!');
            }
        }, 2000);
    });

    return promise;
};

function progress() {
    console.log('Course on progress...');

    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(marks >= 80) {
                resolve();
            } else {
                reject('You could not get enough marks to get the certificate');
            }
        }, 3000);
    });
    return promise;
};

function getCertificate() {
    console.log('Preparing Your Certificate');

    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve('Congrates! You got the certificate');
        }, 1000);
    });
    return promise;
};

enroll()
.then(progress)
.then(getCertificate)
.then(res => console.log(res))
.catch(err => console.log(err));
// const status = false;

// console.log('Task 1');

//promise definition
// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if(status){
//             resolve(`Task 2`);
//         } else {
//             reject('failed');
//         }
//     }, 2000);
// })

//promise call
// promise
// .then(function(value){
//     console.log(value);
// })
// .catch(function(err){
//     console.log(err);
// })

// console.log('Task 3');




// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' }
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post,index) => {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             const error = false;

//             if(!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something Went Wrong')
//             }
//         }, 2000);
//     });
   
// }

// // createPost({ title: 'Post Three', body: 'This Is Post Three'})
// // .then(getPosts)
// // .catch(error => console.log(error));

// //promise.all
// const promise1 = Promise.resolve('Hello World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => 
//     setTimeout(resolve,2000,'Goodbye'));

