const arr = [2,8,3,7,4,105,5,2,5,65];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     sum += arr[i];
// }

function largestNum(num) {
    let largest = num[0];
    for(let i = 0; i <num.length; i++) {
        let element = num[i];
        if(element > largest) {
            largest = element;
        }
    }
    return largest;
}

function lowestNum(num) {
    let lowest = num[0];
    for(let i = 0; i <num.length; i++) {
        let element = num[i];
        if(element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const ages = [19,52,42,15,21,54,25,56];
const oldest = largestNum(ages);
const oldest2 = largestNum([-2,-6,-17]);
const youngest = lowestNum(ages);
const youngest2 = lowestNum([-2,-6,-17]);


// const max = Math.max(...arr);

console.log(oldest2,youngest2);