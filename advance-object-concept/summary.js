//object method

const pen = {
    brand: 'matador',
    price: '5',
    writePoem: function(food){
        console.log(food);
    }
}
//return an array containing all property of given object
const keys = Object.keys(pen);

//return an array containing all value of given object
const values = Object.values(pen);

// loop through an object

// output the properties of given object
for(const prop in pen) {
    // console.log(prop); // this will return all properties
    // console.log(pen[prop]); // this will return all values
}

// output the properties and the values of given object
for(const [key,value] of Object.entries(pen)) {
    // console.log(value);
}

// compare objects

const a = {a: 1}
const b = {a: 1} // a & b is not same though they have same value. they have different memory refference so that they are different
const c = a; // it will be same with a bcz they have same memory refference

//binding

const aBounded = pen.writePoem.bind(a);
aBounded();
// using the pen objects method in "a" object.

//this 
//* never use "this" keyword in arrow function.
