
const loadSports = async () => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`
    const res = await fetch(url);
    const data = await res.json();
    showSports(data.sports);
}

loadSports();

const showSports = sports => {
    const resultContainer = document.getElementById('result');
        sports.forEach(value => {

            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card">
            <img src="${value.strSportThumb}" class="card-img-top" alt="${value.strSport}" />
            <div class="card-body">
              <h5 class="card-title">${value.strSport}</h5>
              <p class="card-text">
                ${value.strSportDescription.slice(0,100)}
              </p>
              <button
              id="btn"
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onclick='loadSportDetail("${value.strSport}","${value.strSportThumb}","${value.strSportDescription.slice(0,200)}")'
            >
              Details
            </button>
          
            </div>
          </div>
            `
            resultContainer.appendChild(div);
            console.log(value.strSportDescription);
        });
} 

const loadSportDetail = (title,img,desc) => {
  const modalTitle = document.querySelector('.modal-title');
  const modalImg = document.querySelector('.modal-img');
  const modalDesc = document.querySelector('.modal-description');
  modalTitle.textContent = title;
  modalImg.setAttribute('src',`${img}`);
  modalDesc.textContent = desc;
  console.log(desc);
}