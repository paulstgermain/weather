let lat;
let lon;
let apiURL;
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let icon = document.querySelector('.icon');
let name = document.querySelector('.name');
let feel = document.querySelector('.feel');
let min = document.querySelector('.min');
let max = document.querySelector('.max');

navigator.geolocation.getCurrentPosition((position) => {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  $(document).ready(function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=39c5de09fd0bf6d7bf60ba117bb372f8&units=imperial')
    .then(response => response.json())
    .then(data => {
        let tempVal = data['main']['temp'];
        let descVal = data['weather'][0]['description'];
        let iconVal = data['weather'][0]['icon'];
        let nameVal = data['name'];
        let feelVal = data['main']['feels_like'];
        let minVal = data['main']['temp_min'];
        let maxVal = data['main']['temp_max'];

        temp.innerHTML = tempVal + ' F°';
        desc.innerHTML = descVal;
        icon.src = "http://openweathermap.org/img/wn/" + iconVal + "@2x.png"
        name.innerHTML = nameVal;
        feel.innerHTML = "Feels like: " + feelVal;
        min.innerHTML = "Low: " + minVal;
        max.innerHTML = "High: " + maxVal;
    })
  })

});
