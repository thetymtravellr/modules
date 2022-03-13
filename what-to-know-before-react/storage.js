/* const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //add to local storage
    if(id && value) {
    localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
} */


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    play(status) {
        console.log(`${this.name} aged ${this.age} is playing ${status}`);
    }
}

const person1 = new Person('John',18);
const person2 = new Person('Jane', 20);

person1.play('football');
person2.play('basketball');