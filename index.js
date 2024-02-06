function changingTemperature() {
  let cityName = prompt("What is your city name");
  let temperature = prompt("What is your current temperature");
  if (temperature < 0) {
    let headng = document.querySelector("h1");
    headng.innerHTML = "🙁 <br/>Currently " + temperature + "°C in " + cityName;
  } else {
    let heading = document.querySelector("h1");
    heading = innerHTML =
      "😃<br/>Currently " + temperature + "°C in " + cityName;
  }
}
let changeCityButton = document.querySelector("button");
changeCityButton.addEventListener("click", changingTemperature);
