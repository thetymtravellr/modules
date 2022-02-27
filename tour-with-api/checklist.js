//!module 42.5

//* 1
const obj = {
    childs: {
        obj1: 'I',
        obj2: 'love',
        obj3: 'my',
        obj4: 'land'
    },
    names: ['robiul','hasan','muhammad'],
    myFunc: function(){
        console.log(`${this.childs.obj1} ${this.childs.obj2} ${this.childs.obj3} ${this.childs.obj4} `)
    },
    age: 23,
    location: 'BD',
};

// obj.myFunc();

const str = `${obj.childs.obj3} ${obj.names[1]} ${obj.age}`;

const ran = () => 89;
const ran2 = num => num / 7;
const ran3 = (a,b) => (a + b) / 2;
const ran4 = (x,y) => {
    const a = x + 7;
    const b = y + 7;
    let sum = a + b;
    return sum;
}

const num = [33,43,65,7,55,1,4,2,4,6].map(inp => inp / 7);

//* map

/**
*~ ম্যাপ array এর সকল উপাদান কে loop through করে তার উপর operation চালায় এবং value গুলোকে একটা array হিসেবে return করে।
*/
// const num = [33,43,65,7,55,1,4,2,4,6].map(inp => inp / 7);
 
//[ 4.7, 6.1, 9.2, 1, 7.8, 0.1, 0.5, 0.2, 0.5, 0.8]


//^ forEach

/**
*! forEach প্রত্যেকটা element এর উপর loop করে এবং তার উপর operation করে। তবে কিছু return করেনা। foreach এ ৩ টা parameter দেয়া যায়। (element,index,array). 
*/
const num3 = [33,43,65,7,55,1,4,2,4,6]

// num3.forEach(inp => console.log(inp));


//? filter

/**
*^ filter এর মাধ্যমে কিছু শর্ত যোগ করে সেই অনুযায়ী value return করানো যায়। filter array return করে
*/

// const num2 = [34,45,23,3,44,4,7,2,5,77,12];
// const newNum = num2.filter(inp => inp > 10);
// [ 34, 45, 23, 44, 77, 12 ]

//* find

/**
*! find তাকে দেয়া শর্ত অনুযায়ী element খুঁজে বের করে। find শুধুমাত্র প্রথম elementটাই return করে.
*/

// const num4 = [34,45,23,3,44,4,7,2,5,77,12];
// const newNum4 = num4.find(inp => inp % 2 === 0);
// 34


const user = {
    fname: 'Robiul',
    lname: 'Hasan',
    age: 23,
    location: 'BD',
    gender: 'male',
    friends: ['mansur','umar','osama','ayman']
}
const arr = ['bangladesh','saudi arabia','iraq','palestine','syria'];

const [,,balance] = arr;
const { fname } = user;


const loadData = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
loadData()

const displayPhotos = photos => {
    const main = document.getElementById('main');
    const album = photos.splice(0,20);
    album.forEach(photo => {
        const div = document.createElement('div');
        div.className = 'col';
        div.innerHTML = `
        <div class="card" onclick="showDetail(${photo.id})">
        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
        </div>
      </div>
        `;
        main.appendChild(div);
    });
}

const showDetail = id => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => res.json())
    .then(data => data.find(data => {
        const item = document.getElementById('clicked');
        if(data.id === id) {
            item.innerHTML = '';
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${data.thumbnailUrl}" class="card-img-top" alt="${data.title}">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
            </div>
             </div>
            `;
            item.appendChild(div);
        }
    }))
}