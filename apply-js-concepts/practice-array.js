const books = [
    'A Smarter Way to Learn JavaScript',
    'Eloquent JavaScript',
    'JavaScript & JQuery',
    'JavaScript: The Good Parts',
    'Learn JS VISUALLY',
    'JavaScript: The Definitive Guide',
    'Effective JavaScript',
    'JavaScript For Kids',
    'Programming JavaScript Applications',
    'High-Performance Browser Networking'
]

const output = [];

const searching = 'javascript';

for(const book of books) {
    if(book.toLowerCase().includes(searching.toLowerCase())) {
        output.push(book);
    }
}



const arr = [5,7,1,9,5,7,5,6,2,5,5,45,421,54,751,];

const newArr = arr.sort(function(a,b){return a - b});

console.log(newArr);