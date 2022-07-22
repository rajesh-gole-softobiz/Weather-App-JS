var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', ()=>{
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=85e86e124722a26145b39c3d147234f0')
.then(response => {
    return response.json()
})
.then(data => {
  // Get the temperature from API response - https://openweathermap.org/current
  var tempValue = data['main']['temp'];

  //Kelvin to Celcius
  tempValue = Math.floor(tempValue-273.15);

  // Name of the location
  var nameValue = data['name'];

  // Weather description
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc : "+descValue;
  temp.innerHTML = "Temp : "+tempValue+"\xB0C";
  input.value ="";

})

.catch(err => alert("Please Enter a valid city name!"));
})