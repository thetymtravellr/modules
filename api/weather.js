

function weather(city) {
    const key = '8a7d8339e5956ae8e3031a9008b55fad';

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

weather('dhaka');