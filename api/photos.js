function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data));
}
loadPhotos()
function displayPhotos(photos) {
    const img = document.querySelector('.image');
    const photo = photos.find(photo => photo.id == 1);
    img.setAttribute('src',photo.url);
}