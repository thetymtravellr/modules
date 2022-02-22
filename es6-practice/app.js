// const name = 'Robiul Hasan';
// const gender = 'Male';
// const birthYear = 1998;
// let age = 23;
// let salary = 100;

const person = {
    firstName: 'Robiul',
    lastName: 'Hasan',
    gender: 'Male',
    birthYear: 1998,
    age: 23,
    salary: 100,
}

// const profile = `This Is ${name}, He Is ${person.age} Y/O and His Salary Is ${person.salary}$ Per Month!`;


const div = inp => inp / 5;



const add = (num1,num2) => {
    const a = num1 + 2;
    const b = num2 + 2;
    return a * b;
}

console.log(div(add(10,5)));

const arr = [2,77,55,1,8,63,5,2,4,2,9,4,11,5];

const newArr = arr.map(el => el*5);

const odd = arr.filter(el => el%2);

const products = [
    {name: 'mobile', price: 70000},
    {name: 'sound system', price: 5000},
    {name: 'watch', price: 3500},
    {name: 'shoes', price: 1500},
]

const budget = products.find(product => product.price == 5000)



/** 
 * ! MAP
*/

/**
 * * map diye amra prottekta element er upor kono operation chalate pari. map amader k ekta array return kore.
 */

/** 
 * ! FILTER
*/

/**
 * * filter er maddhome amra sorto onujayi operation chalate pari. filter kono array return korena. shorter sathe jegulo mile segulo return kore dey.
 */

/** 
 * ! forEach
*/

/**
 * * foreach er maddhome amra prottekta element er operation korte pari. tobe foreach er value amra variable a rakhte parina. shudu operation ekbar chalate pari.
 */
/** 
 * ! FIND
*/

/**
 * * find er maddhome amra sorto onujayi mile amn prothom element k khuje pai. eta shudhu prothom element tai return korbe jeta sorter sathe mile jay.
 */

const { firstName } = person;
const [,,three] = arr;

function sum(a,b,c = 7) {
    return a + b + c;
}



const project = {
    name: 'Islamic Encyclopedia',
    author: {
        name: 'Robiul Hasan',
        age: 23
    },
    location: false,
    service: {
        service1: 'Encyclopedia',
        service2: {
            name: 'Quran',
            type1: 'Hifz',
            type2: 'deliberation'
        },
        service3: 'Hadith',
        service4: 'Historical Map'
    },
    members: ['hasan','robiul','abdur rahim'] 
}

const reading = project?.service.reading?.add;

console.log(reading);