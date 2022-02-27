const loadData = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => displaySports(data.sports))
}
loadData()
const displaySports = sports => {
    const main = document.getElementById('main');
    sports.forEach(sport => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card" onclick="cardDetails(${sport.idSport})">
          <img src="${sport.strSportThumb}" class="card-img-top" alt="${sport.strSport}" />
          <div class="card-body">
            <h5 class="card-title">${sport.strSport}</h5>
            <p class="card-text">
              ${sport.strSportDescription.slice(0,120)}
            </p>
          </div>
        </div>
        `;
        main.appendChild(div);
    })
}

const cardDetails = (id) => {
    const container = document.getElementById('container');
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
    .then(res => res.json())
    .then(data => {
        const allSports = data.sports;
        const clickedSport = allSports.find(sport => sport.idSport == id);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card w-50 mx-auto" onclick="cardDetails(${clickedSport.idSport})">
          <img src="${clickedSport.strSportThumb}" class="card-img-top" alt="${clickedSport.strSport}" />
          <div class="card-body">
            <h5 class="card-title">${clickedSport.strSport}</h5>
            <p class="card-text">
              ${clickedSport.strSportDescription}
            </p>
          </div>
        </div>
        `;
        container.appendChild(div);
    })
}