const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data))
}

const displayDog = dogList => {
    const main = document.getElementById('main');
    const first10Data = dogList.slice(0,10);
    for(const dog of first10Data) {
        const div = document.createElement('div');
        div.className = 'col-md-3 mx-4 border border-danger';
        div.innerHTML = `
        <h2>${dog.name}</h2>
        <img src="${dog.image.url}" alt="picture of a dog" width='400' height='250'/>
        <p>${dog.temperament}</p>
        `;
        main.appendChild(div);
        console.log(dog);
    }
}