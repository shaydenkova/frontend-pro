
 function getWeather() {
 	let cityName = document.getElementById("cityName").value;
 	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b6b679a1b41a7204be8734c7dd3160e6`)  
  	.then(resp => resp.json())
  	.then(data => {
  		if(data.name) {
  			let sectionWeather = document.getElementById("sectionWeather");
 			sectionWeather.classList.remove("hidden");
	  		let cloudsValue = data.weather[0].main;
	  		let tempValue = Math.round(+data.main.temp - 273) + " ℃";
	  		let windValue = data.wind.speed + " km/h";
	  		let humidityValue = data.main.humidity + " %";
	  		let pressureValue = data.main.pressure + " mm";
	  		postValues(cityName, cloudsValue, tempValue, windValue, humidityValue, pressureValue);
  		} else {
  			alert("The name of city is wrong. Please enter correct name!");
  		}})
 }

 function postValues(val1, val2, val3, val4, val5, val6) {
 	let city = document.getElementById("city");
 	city.innerHTML = val1;
 	let clouds = document.getElementById("clouds");
 	clouds.innerHTML = val2;
 	let temp = document.getElementById("temp");
 	temp.innerHTML = val3;
 	let wind = document.getElementById("wind");
 	wind.innerHTML = val4;
 	let humidity = document.getElementById("humidity");
 	humidity.innerHTML = val5;
 	let pressure = document.getElementById("pressure");
 	pressure.innerHTML = val6;
}