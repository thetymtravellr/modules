const sectionTitle = document.querySelectorAll('.section-title');
for(const title of sectionTitle) {
    title.style.color = 'red';
}

const players = document.getElementById('players');
players.style.backgroundColor = 'rgba(255,255,0,.9)';


const list = document.getElementById('list');
const addBtn = document.getElementById('add-item');


addBtn.addEventListener('click', function(){
    const listItem = document.createElement('li');
    listItem.innerText = 'hello world';
    list.appendChild(listItem);
})

list.addEventListener('click',function(e){
    list.removeChild(e.target);
})



const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

function increment() {
    const input = document.getElementById('input');
    const inputValue = input.value;
    console.log(inputValue);
    if(inputValue < 5) {
        input.value = parseInt(inputValue) + 1;
    }
    if(input.value == 5) {
        incrementBtn.setAttribute('disabled','');
    }
}

incrementBtn.addEventListener('click',function(){
    increment();
})

decrementBtn.addEventListener('click',function(){
    const input = document.getElementById('input');
    const inputValue = input.value;

    if(inputValue > 0) {
        input.value = parseInt(inputValue) - 1;
    }
  
})
