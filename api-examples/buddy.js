const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = data => {
    const buddiesContainer = document.querySelector('.buddies');
        const buddies = data.results;
        
        for(const buddy of buddies) {
            console.log(buddy);
            buddiesContainer.innerHTML = `
            <h3>${buddy.name.first} ${buddy.name.last}</h3>
            <img src="${buddy.picture.large}" />
            `
        }
}