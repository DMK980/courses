
function showweatherDetails(event){
    /*
        function fetches the data and presents
        it to the user.
    */
    event.preventDefault()

    const city = document.getElementById('city').value;
    const apikey = 'ee49636161df7b46fbaa3f019f798a64'; 
    const weatherapi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    //fetching lat and lon for city name
    fetch(weatherapi)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${city}</h2>
            <p>Temperature: ${data.main.temp}</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
         
}

//event listener
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);