const anthem = 'Amar sonar bangla ami tomai valobashi';

// split
const words = anthem.split(' ');
const withoutA = anthem.split('a');

// slice
const smallSlice = anthem.slice(5,anthem.length);

// substr

const another = anthem.substr(11 , 15)

// concat

const first = 'hello';
const second = 'world';

const full = first.concat(second).concat('abc');


const words2 = ['a','b','c','d'];

// const joined = words2.join(' ');
// const joined = words2.join('');
// const joined = words2.join(',');
// const joined = words2.join(', ');
const joined = words2.join('www ');

console.log(joined);