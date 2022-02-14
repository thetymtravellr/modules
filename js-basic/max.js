const business = 450;
const minister = 550;
const army = 600;

/* 
// compare 2

if(business > minister ) {
    console.log('Business Person er pola is bigger');
} else {
    console.log('Minister Person er pola is bigger');
}

 */

// compare 3
/* 
if(business > minister && business > army) {
    console.log('Business Person er pola is bigger');
} else if (minister > business && minister > army) {
    console.log('Minister Person er pola is bigger');
} else {
    console.log('Army Person er pola is bigger');
} */

function findMax(num1,num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function findMin(num1,num2,num3) {
    if(num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2
    } else {
        return num3;
    }
}

const max = Math.max(business,minister,army);

console.log(findMin(business,army,minister));