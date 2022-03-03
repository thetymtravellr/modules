document.getElementById('search').addEventListener('click',() => {
    const input = document.getElementById('input').value;
    weather(input);
})

const weather = data => {
    const url = `http://api.weatherapi.com/v1/current.json?key=f19c0ee8079248dd9fd84817222802&q=${data}&aqi=yes`
    fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
}

weather('dhaka');

const displayWeather = data => {
    const sunny = document.getElementById('sunny');
    const cloudy = document.getElementById('cloudy');
    const raining = document.getElementById('raining');
    const city = document.getElementById('city');
    const country = document.getElementById('country');
    const temp = document.getElementById('temp');
    const far = document.getElementById('far');
    const humidity = document.getElementById('humidity');
    const cloud = document.getElementById('cloud');
    const air = document.getElementById('air');
    city.textContent = `${data.location.name}`;
    country.textContent = `${data.location.country}`;
    air.textContent = `${data.current.wind_kph}`;
    cloud.textContent = `${data.current.cloud}`;
    humidity.textContent = `${data.current.humidity}`;
    temp.textContent = `${data.current.temp_c}`;
    far.textContent = `${data.current.temp_f}`

    if(data.current.condition.text = "Sunny") {
        sunny.classList.remove('hidden');
    } else if (data.current.condition.text = "Cloudy") {
        sunny.classList.remove('hidden');
    }

   console.log(data);
}