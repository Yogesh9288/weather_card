const apiKey="d509fe2ab5c7131905d3dd22aceb0d56";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchInput=document.querySelector('#search_input');
const searchBtn=document.querySelector('#search_button');
const weatherIcon=document.querySelector('.weather_icon img');
const body=document.querySelector('html');
async function checkWeather(city) {
    const response=await fetch(apiUrl+`&appid=${apiKey}&q=${city}`);
    if(response.status==404)
    {
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
    else{
    var data=await response.json();
    document.querySelector('#temp').innerHTML=Math.round(data.main.temp)+'°c';
    document.querySelector('#city_name').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
    document.querySelector('.wind').innerHTML=Math.round(data.wind.speed)+' km/hr';

    if(data.weather[0].main=='Clouds')
    {
        weatherIcon.src="images/clouds.png";
        body.style.backgroundImage="url('images/cloudyBackground.jpg')";
    }else if(data.weather[0].main=='Clear')
    {
        weatherIcon.src="images/Clear.png";
        body.style.backgroundImage="url('images/sunnyBackground.jpg')";
    }
    else if(data.weather[0].main=='Rain')
    {
            weatherIcon.src="images/Rain.png";
            body.style.backgroundImage="url('images/rainBackground.jpg')"
    }
    else if(data.weather[0].main=='Drizzle')
        {
            weatherIcon.src="images/drizzle.png";
            body.style.backgroundImage="url('images/drizzleBackground.jpg')"
        }
        else if(data.weather[0].main=='Mist')
            {
                weatherIcon.src="images/mist.png";
                body.style.backgroundImage="url('images/mistBackground.jpg')"
            }
            else if(data.weather[0].main=='Snow')
                {
                    weatherIcon.src="images/snow.png";
                    body.style.backgroundImage="url('images/snowBackground.jpg')"
                }

    document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none';
    console.log(data);
        }
}

searchBtn.addEventListener('click',()=>{
    const city=searchInput.value;
    checkWeather(city);
})
