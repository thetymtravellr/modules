/**
 * ! 1. Button Event Handler Setup 
 * ! 2. Get Input Value
 * */ 
const main = document.getElementById('main');
const searchButton = () => {
    const error = document.getElementById('error');
    const input = document.getElementById('search');
    const inputValue = parseInt(input.value);
    if(isNaN(inputValue) || inputValue == ''){ //isNaN check number or string or other = true
        // alert('Please Enter A Number');
        error.textContent = 'Please Enter A Number';
        input.value = '';
        main.innerHTML = '';
    } else if (inputValue <= 0 || inputValue > 52) {
        error.textContent = 'Please Enter A Number Between 1 to 52';
        input.value = '';
        main.innerHTML = '';
    } else {
        main.innerHTML = '';
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardDisplay(data.cards));
        input.value = '';
        error.textContent = '';
    }
}

/**
 * ? Display Data From API */ 

const cardDisplay = cards => {
    for(const card of cards) {
        const div = document.createElement('div');
        div.classList.add('col-lg-3');
        div.classList.add('col-md-4')
        div.innerHTML = `
        <div class="card mx-auto" style="width: 15rem;">
          <img src="${card.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${card.suit}</h5>
            <p class="card-text">${card.code}</p>
            <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>
         </div>
        </div>
        `;
        main.appendChild(div);
    }
}

const cardDetails = (code) => {
    const singleCardContainer = document.getElementById('single-card');
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    .then(res => res.json())
    .then(data => {
        const allCirds = data.cards;
        const singleCard = allCirds.find(card => card.code === code);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card mx-auto" style="width: 15rem;">
          <img src="${singleCard.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${singleCard.suit}</h5>
            <p class="card-text">${singleCard.code}</p>
         </div>
        </div>
        `;
        singleCardContainer.appendChild(div);
    });
}
// const loadData = async () => {
//     const url = ;
//     const res = await fetch(url);
//     const data =await res.json();
//     showCards(data);
// }