const locations = [
  { timezone: "Asia/Kolkata", country: "India", city: "Mumbai", flag: "🇮🇳", lat: 19.076, lon: 72.877 },
  { timezone: "America/New_York", country: "United States", city: "New York", flag: "🇺🇸", lat: 40.7128, lon: -74.006 },
  { timezone: "Europe/London", country: "United Kingdom", city: "London", flag: "🇬🇧", lat: 51.5074, lon: -0.1278 },
  { timezone: "Asia/Tokyo", country: "Japan", city: "Tokyo", flag: "🇯🇵", lat: 35.6762, lon: 139.6503 },
  { timezone: "Australia/Sydney", country: "Australia", city: "Sydney", flag: "🇦🇺", lat: -33.8688, lon: 151.2093 }
];

let clockTimer;
const requestedTimezone = new URLSearchParams(window.location.search).get("timezone");
const savedTimezone = requestedTimezone || localStorage.getItem("worldInfoTimezone") || locations[0].timezone;

function getLocation(timezone) {
  return locations.find((location) => location.timezone === timezone) || locations[0];
}

function updateTime(location) {
  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");
  if (!timeEl) return;

  const now = new Date();
  const timeFormatter = new Intl.DateTimeFormat([], {
    timeZone: location.timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  const dateFormatter = new Intl.DateTimeFormat([], {
    timeZone: location.timezone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  timeEl.textContent = timeFormatter.format(now);
  if (dateEl) dateEl.textContent = dateFormatter.format(now);
}

function weatherDescription(code) {
  const descriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Freezing fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy showers",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Thunderstorm with hail"
  };
  return descriptions[code] || "Conditions unavailable";
}

function setLoading(isLoading) {
  const button = document.getElementById("showInfo");
  const status = document.getElementById("status");
  if (button) {
    button.disabled = isLoading;
    button.textContent = isLoading ? "Loading..." : "Refresh weather";
  }
  if (status && isLoading) status.textContent = "Fetching the latest weather...";
}

async function getInfo() {
  const select = document.getElementById("countrySelect");
  const weatherEl = document.getElementById("weather");
  const details = document.getElementById("weatherDetails");
  const status = document.getElementById("status");
  if (!select || !weatherEl) return;

  const location = getLocation(select.value);
  localStorage.setItem("worldInfoTimezone", location.timezone);
  clearInterval(clockTimer);
  updateTime(location);
  clockTimer = setInterval(() => updateTime(location), 1000);
  setLoading(true);
  weatherEl.textContent = "Weather: loading...";

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;
    const weatherRes = await fetch(url);
    if (!weatherRes.ok) throw new Error("Weather request failed");
    const weatherData = await weatherRes.json();
    const current = weatherData.current;
    const units = weatherData.current_units;
    const description = weatherDescription(current.weather_code);

    weatherEl.textContent = `${description} · ${Math.round(current.temperature_2m)}${units.temperature_2m}`;
    if (details) {
      details.innerHTML = `<span>Feels like <strong>${Math.round(current.apparent_temperature)}${units.apparent_temperature}</strong></span><span>Wind <strong>${Math.round(current.wind_speed_10m)} ${units.wind_speed_10m}</strong></span><span>Humidity <strong>${current.relative_humidity_2m}${units.relative_humidity_2m}</strong></span>`;
    }
    if (status) status.textContent = `Updated just now for ${location.city}.`;
  } catch (err) {
    console.error("Weather error:", err);
    weatherEl.textContent = "Weather unavailable right now";
    if (details) details.innerHTML = "<span>Check your connection and try again.</span>";
    if (status) status.textContent = "We could not reach the weather service.";
  } finally {
    setLoading(false);
  }
}

function populateLocations() {
  const select = document.getElementById("countrySelect");
  if (!select) return;
  select.innerHTML = locations.map((location) =>
    `<option value="${location.timezone}">${location.flag} ${location.city}, ${location.country}</option>`
  ).join("");
  select.value = savedTimezone;
  select.addEventListener("change", getInfo);
  const refreshButton = document.getElementById("showInfo");
  if (refreshButton) refreshButton.addEventListener("click", getInfo);
}

function renderCountries() {
  const grid = document.getElementById("countryGrid");
  if (!grid) return;
  grid.innerHTML = locations.map((location) => `
    <article class="country-card">
      <span class="country-flag" aria-hidden="true">${location.flag}</span>
      <div><h2>${location.city}</h2><p>${location.country}</p></div>
      <a href="weather.html?timezone=${encodeURIComponent(location.timezone)}">View weather <span aria-hidden="true">→</span></a>
    </article>
  `).join("");
}

populateLocations();
renderCountries();
if (document.getElementById("countrySelect")) getInfo();
