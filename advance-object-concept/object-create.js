// different way to create object

//1. regular way (object literel)
const student = {
    name: 'Sakib Al Hasan',
    job: 'cricketer'
}

//2. using new keyword
const person = new Object({
    name: 'hasan'
})

// console.log(person.name);

//3. using create 

const human = Object.create(student);

// console.log(human.name);

//4. using class

class People {
    constructor(name,job){
        this.name = name;
        this.job = job;
    }
}

const peop = new People('Robiul', 'Unemployed');

// console.log(peop);

//5. function

function Manus(name,age){
    this.name = name;
    this.age = age;
}
const man = new Manus('kader',50);

// console.log(man);