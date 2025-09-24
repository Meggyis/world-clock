function updateTime() {
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML = moment()
  .tz("America/Los_Angeles")
  .format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = moment()
  .tz("America/Los_Angeles")
  .format("h:mm:ss [<small>]A[</small>]");
  
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
parisDateElement.innerHTML = moment()
  .tz("Europe/Paris")
  .format("MMMM Do YYYY");
parisTimeElement.innerHTML = moment()
  .tz("Europe/Paris")
  .format("h:mm:ss [<small>]A[</small>]");

}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime=moment().tz(cityTimeZone);
  let citiesElement=document.querySelector("#cities");
  citiesElement.innerHTML=`<div class="city">
  <div>
    <h2>${cityTimeZone}</h2>
    <div class="date">${cityTimeFormat("MMMM Do YYYY")}</div>
  </div>
    <div class="time">${cityTime.format("h:mm:ss")} 
      <small>
      ${cityTime.format("A")}</small></div>
    </div>
`;
}

let citySelectElement=document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
