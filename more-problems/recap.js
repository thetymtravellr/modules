function largestElement(num) {
    let max = num[0]; 
    for(let i = 0; i < num.length; i++) {
        const element = num[i];
        if(element > max) {
            max = element;
        }
    }
}

function smallestElement(num) {
    let min = num[0]; 
    for(let i = 0; i < num.length; i++) {
        const element = num[i];
        if(element < min) {
            min = element;
        }
    }
}

const arr = [1,2,3,5,3,1,4,5];

// let result = arr.map((e) => {
//     return e * 2;
// })

const result = [...new Set(arr)];

function removeDuplicate(names) {
    const unique = [];
    // for(let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(element);
    // }

    for (const element of names) {
        if(unique.indexOf(element) === -1) {
            unique.push(element);
        }
    }

    // কোন একটা এরের প্রত্যেকটা এলেমেন্ত কে একটা একটা করে ধরতে চাইলে আমরা for of loop use korte pari.

    return unique;
}


console.log( removeDuplicate(arr));

// amra length property diye string er legnth pete pari.
