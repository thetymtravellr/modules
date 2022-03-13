const images = [
    './img/pic-1.jpg',
    './img/pic-2.jpg',
    './img/pic-3.jpg',
    './img/pic-4.jpg',
    './img/pic-5.jpg',
    './img/pic-6.jpg',
];
let imgIndex = 0;
const slides = document.getElementById('slider-img');
setInterval(() => {
    if(imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    slides.src = imgUrl;
    imgIndex++
},1000);