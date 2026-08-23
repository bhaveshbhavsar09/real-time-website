async function getInfo() {
  const country = document.getElementById("countrySelect").value;
  const timeEl = document.getElementById("time");
  const weatherEl = document.getElementById("weather");

  try {
    // ✅ Local time using Intl API
    const now = new Date();
    const options = { timeZone: country, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formatter = new Intl.DateTimeFormat([], options);
    timeEl.innerText = "Time: " + formatter.format(now);
  } catch (err) {
    console.error("Time error:", err);
    timeEl.innerText = "Time: unavailable";
  }

  // ✅ Weather from Open-Meteo
  let coords = {
    "Asia/Kolkata": {lat: 19.076, lon: 72.877}, // Mumbai
    "America/New_York": {lat: 40.7128, lon: -74.0060},
    "Europe/London": {lat: 51.5074, lon: -0.1278},
    "Asia/Tokyo": {lat: 35.6762, lon: 139.6503},
    "Australia/Sydney": {lat: -33.8688, lon: 151.2093}
  };

  try {
    const {lat, lon} = coords[country];
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
    weatherEl.innerText =
      "Weather: " +
      weatherData.current_weather.temperature + "°C, " +
      weatherData.current_weather.windspeed + " km/h wind";
  } catch (err) {
    console.error("Weather error:", err);
    weatherEl.innerText = "Weather: unavailable";
  }
}
