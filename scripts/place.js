console.log("JS is running!");

const tempElement = document.getElementById("temperature");

const temperature = 29;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temperature, windSpeed) + "°C";
}

tempElement.innerHTML = `
  Temperature: ${temperature}°C <br>
  Wind Speed: ${windSpeed} km/h <br>
  Wind Chill: ${windChill}
`;
