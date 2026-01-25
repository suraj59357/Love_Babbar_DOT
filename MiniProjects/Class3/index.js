console.log("Hello Dunia!..");

const API_KEY = "168771779c71f3d64106d8a88376808a";

async function renderWeatherInfo(data){

    let newPara= document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);

}

async function showWeather(){
    try{
        let city="goa";

        const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data =await response;

        console.log("weather data is :",data);

        renderWeatherInfo(data);


    }catch(err){
        console.log("Error "+err);
    }
}


async function getWeatherData(){
    try{
        let latitude = 15.333;
        let longitude = 18.33;

        let response =await  fetch(`https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={API key}`);
        let data =await response.json();

        console.log("weather data is :",data);

        renderWeatherInfo(data);
    }catch(err){
        console.log(err);
    }

    
}