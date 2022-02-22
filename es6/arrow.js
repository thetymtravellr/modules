//function declare
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
//function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
//function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}
//arrow function

const add4 = (num1,num2) => num1 + num2;

console.log(add(1,5),add2(5,7),add3(8,4),add4(10,70));

