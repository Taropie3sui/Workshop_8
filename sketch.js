let currentTemp, isDay;
let sunriseTime, sunsetTime;
let weather_api = 'https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7635&current=temperature_2m&hourly=temperature_2m,rain&daily=sunrise,sunset';

async function getWeather() {
let response = await fetch(weather_api);
let data = await response.json();
  
currentTemp = data.current_weather.temperature;
}

function setup() {
  createCanvas(400, 400);
  getWeather();
  textSize(18);
}

function draw() {
  background(255);
  fill (0);
  noStroke();
  ellipse(width / 2, height / 3, 50, 50); 

  fill(200,35,304); 
  text(`Current temperature in Auckland is: ${currentTemp}°C`, 10, height - 30);
}
