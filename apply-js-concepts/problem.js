function positiveSum(arr) {
    let sumOfPositive = 0;
    for(const nums of arr) {
      if(nums > 0) {
        sumOfPositive += nums;
      }
    }
    return sumOfPositive;
  }
// console.log(positiveSum([2,3,4,5]));
const removeChar = str => str.substr(1,str.length - 2);

// console.log(removeChar('hasan'));

const arr = ['hasan','hasan','hasan',false,'hasan',0,'hasan'];
let sheeps = 0;
for(const [index,value] of arr.entries()) {
    if(arr[index] === 'hasan') {
        sheeps++;
    }
}
// easiest way
// console.log(arr.filter(Boolean).length);
// console.log(arr.filter(item => item === 'hasan'));

// function makeNegative(num) {
//     // Code?
//     if(num > 0) {
//         num = -num;
//     }
//     return num;
// }
// const makeNegative = num => num > 0 ? -num : num;
// console.log(-Math.abs(0));

const n = 8;
let fName = 'hasan';
let newFname = '';
for(let i = 1; i <= n; i++) {
    newFname += fName;
}
//easiest way 
// console.log(fName.repeat(n));


// function noSpace(x){
//     return x.split(' ').join('');
//    }

//noSpace = x => x.split(' ').join('');

const summation = function (num) {
    // Code here
    let value = 0;
    for(let i = 1; i <= num; i++){
        value += i;
    }
    return value;
}
// easiest way
// const summation = n => n * (n + 1) / 2;
// console.log(summation(5));

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let small = args[0];
      for(const num of args) {
          if(num < small) {
              small = num;
          }
      }
      return small;
    }
}
//easiest way
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args);
//     }
// }
const str = 'hasan';
let newStr = '';
for(let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}

// easiest way
// function solution(str){
//     return str.split('').reverse().join('');  
//   }
// const solution = s => [...s].reverse().join('')