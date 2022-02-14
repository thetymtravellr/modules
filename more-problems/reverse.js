const greetings = 'Hello, How Are You?';

function reverseStr(str) {
    let reversed = '';

    for(const char of str) {
        // console.log(char);
        reversed = char + reversed;
    }
    console.log(reversed);
}

// reverseStr(greetings);


function add(num1,num2) {
    const sum = num1 + num2;
    return sum;
}

function multiply(num1, num2) {
    const sum = num1 * num2;
    return sum;
}

console.log(multiply(5,5));