'use strict';

const paymentSuccess = true;
const marks = 70;

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


const course = async () => {
    try {
        await enroll();
        await progress();
        const message = await getCertificate();

        console.log(message);
    } catch(err) {
        console.log(err);
    }
}

// course();

// enroll()
// .then(progress)
// .then(getCertificate)
// .then(res => console.log(res))
// .catch(err => console.log(err));

const arr = ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]

// const newArr = arr.map(value => {
//     value.replace(' ');
// })
// for(const item of arr) {
//     const arr = item.split(':');
//     for(const newItem of arr) {
//         console.log(...newItem);
//     }
// }
// console.log(newArr);

