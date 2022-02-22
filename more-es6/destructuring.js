const fish = {
    id: 58,
    name: 'King Hislsha',
    price: 9000,
    phone: '0171717555555',
    address: 'Chandpur',
    dress: "silver",

}

const { phone,price,dress = 'dont mind',id } = fish;

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


// const framework = company.web.framework;
const {work,framework} = company.web;
const { web } = company;
const {second , third} = company.web.tech;
console.log(second,third);