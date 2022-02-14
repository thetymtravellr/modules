function inchToFeet(inches) {
    const feet = inches / 12;
    return feet.toFixed(2);
}

function mileToKm(miles) {
return miles * 1.60934;
}

function evenOrOdd(num) {
    if(num % 2 === 0) {
         console.log('Even');
    } else {
        console.log('Odd');
    }
}

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true
    }
    return false;
}

console.log(isLeapYear(2075));

function factorial(inp) {
    let factorial = 1;
    for(let i = 1; i <= inp; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

console.log(factorial(8));


for(let i = 0; i <= 10; i++){ 

}