const add = (num1,num2) => num1 + num2;
const multiply = (num1,num2,num3) => num1 * num2 * num3;
const fiveTimes = num => num * 5;
const getName = () => 'Brandon Sam';
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const res = sum * diff;
    const output = res * 5;
    return output;
}

const sum1 = add(50,40);
const multi = multiply(2,2,2);
const five = fiveTimes(10);
const name = getName();
const res = doMath(7,5);

console.log(res);

document.getElementById('my-btn').addEventListener('click',()=>{

});