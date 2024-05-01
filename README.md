# Workshop_8

APIs

Ipify API=retrieve IP address
Use json

Let ip;
Let ip_api= ‘URL’;

Async function getIP(){
Let data = await fetch (ip_api);
->make the request to api for using URL
(Continue) let j_data = await data.json();
Ip = j_data.ip;

Function setup
…
Text(ip,20,100);

——————————-
 JokeAPI

Let intro, punchline;
Let joke_api= ‘URL’;

Async function getJoke(){
Let data = await fetch (joke_api);
Let j_data = await data.json();
Intro = j_data.setup;
Punchline = j_data.delivery;

Function setup
GetJoke();

Function draw
Text(intro, xxx, xxx);
Text (punchline, xxx, xxx);

If refresh, new joke will appear
—————-
If want jokes in every x seconds:
Sanction setup
SetInterval (getJokes, 1000); (every second)

———————
Open-meteo.com
Let currentTemp, dayNight;
Let weather_api= ‘URL’;

Async function getWeather(){
Let data = await fetch (weather_api);
Let j_data = await data.json();
CurrentTemp = j_data.current.temperature_2m;
DayNight = j_data.current.is_day;

Function Set up
GetWeather();

Function draw
Text (“current temperature is: “ + currentTemp, xxx, xxx); 

URL: https://taropie3sui.github.io/Workshop_8/
