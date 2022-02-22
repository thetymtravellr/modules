// declare variable based on the name of an object property

const myObj = {
    x: 2,
    y: 3,
    z: 4,
    a: 300,
    b: 400,
    c: 500,
};

const { x,b } = myObj;

// destructuring array

const arr = [6,88,45,19];
const [best,faltu] = [45,46];
const [i,,...q] = arr;


const company = {
    name: 'IE',
    ceo: {
        id: 1,
        name: 'Robiul Hasan',
        food: 'Fuchka',
    },
    web: {
        work: 'Website Development',
        employee: 22,
        framework: 'React',
        tech: {
            first: 'html',
            second: 'sec',
            third: 'js',
        }
    }
}

// chaining

console.log(company.web?.tech.third);
console.log(company.web?.back?.third);