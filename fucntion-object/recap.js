var favoriteBook = '4 Hour Work Week';

var bookList = ['Productive Muslim', 'Human Being', 'Time Management', 'Secret History'];

var secretHistoryIndex = bookList.indexOf('Secret History');

bookList[1] = 'Revival';

bookList.push('Human Being');
bookList.pop();

if(bookList[1] == 'Time Management') {
    console.log('I Have Readen Time Management');
} else {
    console.log('I didn"t Read Yet');
}

// while

var i = 0;
while(i < 15) {
    console.log('Hello', i);
    i++;
}

// for

for(let i = 0; i < 15; i++) {
    console.log(i);
}