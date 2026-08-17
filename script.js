async function getInfo() {
  const country = document.getElementById("countrySelect").value;
  const timeEl = document.getElementById("time");
  const weatherEl = document.getElementById("weather");

  try {
    // Get time from WorldTimeAPI
    const timeRes = await fetch(`https://worldtimeapi.org/api/timezone/${country}`);
    if (!timeRes.ok) throw new Error("Time API failed");
    const timeData = await timeRes.json();
    timeEl.innerText = "Time: " + new Date(timeData.datetime).toLocaleTimeString();
  } catch (err) {
    console.error("Time error:", err);
    timeEl.innerText = "Time: unavailable";
  }

  // Coordinates for weather (demo cities)
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
    if (!weatherRes.ok) throw new Error("Weather API failed");
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
