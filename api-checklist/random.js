const loadData = () => {
    fetch('https://randomuser.me/api/?results=1000')
    .then(res => res.json())
    .then(data => showUser(data.results[0]) )
}

loadData();

const showUser = (users) => {
    const container = document.getElementById('container');
    
        container.innerHTML = `
        <h3>${users.name.first}</h3>
        <img src="${users.picture.large}" alt="${users.name.first}" />
        <div>
        <address>
        <p>Street: ${users.location.street.number}, ${users.location.street.name}</p>
        <p>City: ${users.location.city}</p>
        <p>Coordinates: Lat-${users.location.coordinates.latitude}, long-${users.location.coordinates.longitude}</p>
        </address>
        <p>Timezone: ${users.location.timezone.offset}</p>
        </div>
        `
}