
/* 
const apiUrl = ""
 */

const searchButton = document.querySelector('.search-box button');
const notFound = document.querySelector('.not-found');
const startApp = document.querySelector('.app-start');
const containerStart = document.querySelector('.start-container');
const startBtn = document.querySelector('.app-start button');


startBtn.addEventListener('click', () => {
    containerStart.classList.add = ('active');
    containerStart.style.transform = 'translateX(-100%)';
}) 

async function cheickWeather() {

    console.log('Click');

    const apiKey = "00f781f2771f9707dc5f5d405584c605";

    const location = document.querySelector('.search-box input').value;
    const city = document.querySelector('.city');
    const cityP = document.querySelector('.city p');

    const requestApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=fr`;

    const response = await fetch(requestApiUrl);
    console.log(response);

    const datas = await response.json();
    console.log(datas);

    if (datas.cod === 200) {
        const imageWeather = document.querySelector('.weather-info img');
        const temperature = document.querySelector('.weather-info .temperature');
        const description = document.querySelector('.weather-info .description');
        const humidity = document.querySelector('.humidity .humidity-info');
        const wind = document.querySelector('.wind .wind-info');

        switch (datas.weather[0].main) {
            case 'Clouds':
                imageWeather.src = 'images/cloud.png';
                break;
                
            case 'Clear':
                imageWeather.src = 'images/clear.png';
                break;
            
            case 'Rain':
                imageWeather.src = 'images/rain.png';
                break;
            
            case 'Snow':
                imageWeather.src = 'images/snow.png';
                break;
            
            case 'Mist':
                imageWeather.src = 'images/mist.png';
                break;
            

            default:
                imageWeather.src = 'images/cloud.png';
                break;
        }

        document.querySelector('.weather-box').style.visibility = 'visible';
        document.querySelector('.weather-details').style.visibility = 'visible';
        notFound.style.visibility = 'hidden';
        city.style.visibility = 'visible';


        temperature.innerHTML = `${Math.round(datas.main.temp)}<span>°C</span>`;
        description.textContent = datas.weather[0].description;
        humidity.textContent = `${datas.main.humidity} %`;
        wind.textContent = `${datas.wind.speed} m/s`;
        cityP.textContent = `${datas.name}, ${datas.sys.country}`;
    }

    else {
        document.querySelector('.weather-box').style.visibility = 'hidden';
        document.querySelector('.weather-details').style.visibility = 'hidden';
        notFound.style.visibility = 'visible';
        city.style.visibility = 'visible';
        cityP.textContent = location;
    }

}

searchButton.addEventListener('click', cheickWeather);
