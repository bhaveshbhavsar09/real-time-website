// ============================================================
// WORLD INFO — ALL 195 COUNTRIES
// 193 UN member states + Palestine + Vatican City
// ============================================================

const countries = [
  ["AF","Afghanistan","Kabul","🇦🇫","Asia/Kabul",34.5553,69.2075],
  ["AL","Albania","Tirana","🇦🇱","Europe/Tirane",41.3275,19.8187],
  ["DZ","Algeria","Algiers","🇩🇿","Africa/Algiers",36.7538,3.0588],
  ["AD","Andorra","Andorra la Vella","🇦🇩","Europe/Andorra",42.5063,1.5218],
  ["AO","Angola","Luanda","🇦🇴","Africa/Luanda",-8.8390,13.2894],
  ["AG","Antigua and Barbuda","Saint John's","🇦🇬","America/Antigua",17.1172,-61.8457],
  ["AR","Argentina","Buenos Aires","🇦🇷","America/Argentina/Buenos_Aires",-34.6037,-58.3816],
  ["AM","Armenia","Yerevan","🇦🇲","Asia/Yerevan",40.1872,44.5152],
  ["AU","Australia","Canberra","🇦🇺","Australia/Sydney",-35.2809,149.1300],
  ["AT","Austria","Vienna","🇦🇹","Europe/Vienna",48.2082,16.3738],
  ["AZ","Azerbaijan","Baku","🇦🇿","Asia/Baku",40.4093,49.8671],
  ["BS","Bahamas","Nassau","🇧🇸","America/Nassau",25.0443,-77.3504],
  ["BH","Bahrain","Manama","🇧🇭","Asia/Bahrain",26.2235,50.5876],
  ["BD","Bangladesh","Dhaka","🇧🇩","Asia/Dhaka",23.8103,90.4125],
  ["BB","Barbados","Bridgetown","🇧🇧","America/Barbados",13.0975,-59.6167],
  ["BY","Belarus","Minsk","🇧🇾","Europe/Minsk",53.9006,27.5590],
  ["BE","Belgium","Brussels","🇧🇪","Europe/Brussels",50.8503,4.3517],
  ["BZ","Belize","Belmopan","🇧🇿","America/Belize",17.2510,-88.7590],
  ["BJ","Benin","Porto-Novo","🇧🇯","Africa/Porto-Novo",6.4969,2.6289],
  ["BT","Bhutan","Thimphu","🇧🇹","Asia/Thimphu",27.4728,89.6390],
  ["BO","Bolivia","Sucre","🇧🇴","America/La_Paz",-19.0196,-65.2619],
  ["BA","Bosnia and Herzegovina","Sarajevo","🇧🇦","Europe/Sarajevo",43.8563,18.4131],
  ["BW","Botswana","Gaborone","🇧🇼","Africa/Gaborone",-24.6282,25.9231],
  ["BR","Brazil","Brasilia","🇧🇷","America/Sao_Paulo",-15.7975,-47.8919],
  ["BN","Brunei","Bandar Seri Begawan","🇧🇳","Asia/Brunei",4.9031,114.9398],
  ["BG","Bulgaria","Sofia","🇧🇬","Europe/Sofia",42.6977,23.3219],
  ["BF","Burkina Faso","Ouagadougou","🇧🇫","Africa/Ouagadougou",12.3714,-1.5197],
  ["BI","Burundi","Gitega","🇧🇮","Africa/Bujumbura",-3.4264,29.9308],
  ["CV","Cabo Verde","Praia","🇨🇻","Atlantic/Cape_Verde",14.9331,-23.5133],
  ["KH","Cambodia","Phnom Penh","🇰🇭","Asia/Phnom_Penh",11.5564,104.9282],
  ["CM","Cameroon","Yaounde","🇨🇲","Africa/Douala",3.8480,11.5021],
  ["CA","Canada","Ottawa","🇨🇦","America/Toronto",45.4215,-75.6972],
  ["CF","Central African Republic","Bangui","🇨🇫","Africa/Bangui",4.3947,18.5582],
  ["TD","Chad","N'Djamena","🇹🇩","Africa/Ndjamena",12.1348,15.0557],
  ["CL","Chile","Santiago","🇨🇱","America/Santiago",-33.4489,-70.6693],
  ["CN","China","Beijing","🇨🇳","Asia/Shanghai",39.9042,116.4074],
  ["CO","Colombia","Bogota","🇨🇴","America/Bogota",4.7110,-74.0721],
  ["KM","Comoros","Moroni","🇰🇲","Indian/Comoro",-11.7172,43.2473],
  ["CG","Republic of the Congo","Brazzaville","🇨🇬","Africa/Brazzaville",-4.2634,15.2429],
  ["CD","Democratic Republic of the Congo","Kinshasa","🇨🇩","Africa/Kinshasa",-4.4419,15.2663],
  ["CR","Costa Rica","San Jose","🇨🇷","America/Costa_Rica",9.9281,-84.0907],
  ["CI","Cote d'Ivoire","Yamoussoukro","🇨🇮","Africa/Abidjan",6.8276,-5.2893],
  ["HR","Croatia","Zagreb","🇭🇷","Europe/Zagreb",45.8150,15.9819],
  ["CU","Cuba","Havana","🇨🇺","America/Havana",23.1136,-82.3666],
  ["CY","Cyprus","Nicosia","🇨🇾","Asia/Nicosia",35.1856,33.3823],
  ["CZ","Czechia","Prague","🇨🇿","Europe/Prague",50.0755,14.4378],
  ["DK","Denmark","Copenhagen","🇩🇰","Europe/Copenhagen",55.6761,12.5683],
  ["DJ","Djibouti","Djibouti","🇩🇯","Africa/Djibouti",11.5721,43.1456],
  ["DM","Dominica","Roseau","🇩🇲","America/Dominica",15.3017,-61.3881],
  ["DO","Dominican Republic","Santo Domingo","🇩🇴","America/Santo_Domingo",18.4861,-69.9312],
  ["EC","Ecuador","Quito","🇪🇨","America/Guayaquil",-0.1807,-78.4678],
  ["EG","Egypt","Cairo","🇪🇬","Africa/Cairo",30.0444,31.2357],
  ["SV","El Salvador","San Salvador","🇸🇻","America/El_Salvador",13.6929,-89.2182],
  ["GQ","Equatorial Guinea","Malabo","🇬🇶","Africa/Malabo",3.7504,8.7371],
  ["ER","Eritrea","Asmara","🇪🇷","Africa/Asmara",15.3229,38.9251],
  ["EE","Estonia","Tallinn","🇪🇪","Europe/Tallinn",59.4370,24.7536],
  ["SZ","Eswatini","Mbabane","🇸🇿","Africa/Mbabane",-26.3054,31.1367],
  ["ET","Ethiopia","Addis Ababa","🇪🇹","Africa/Addis_Ababa",9.0320,38.7469],
  ["FJ","Fiji","Suva","🇫🇯","Pacific/Fiji",-18.1248,178.4501],
  ["FI","Finland","Helsinki","🇫🇮","Europe/Helsinki",60.1699,24.9384],
  ["FR","France","Paris","🇫🇷","Europe/Paris",48.8566,2.3522],
  ["GA","Gabon","Libreville","🇬🇦","Africa/Libreville",0.4162,9.4673],
  ["GM","Gambia","Banjul","🇬🇲","Africa/Banjul",13.4549,-16.5790],
  ["GE","Georgia","Tbilisi","🇬🇪","Asia/Tbilisi",41.7151,44.8271],
  ["DE","Germany","Berlin","🇩🇪","Europe/Berlin",52.5200,13.4050],
  ["GH","Ghana","Accra","🇬🇭","Africa/Accra",5.6037,-0.1870],
  ["GR","Greece","Athens","🇬🇷","Europe/Athens",37.9838,23.7275],
  ["GD","Grenada","Saint George's","🇬🇩","America/Grenada",12.0561,-61.7488],
  ["GT","Guatemala","Guatemala City","🇬🇹","America/Guatemala",14.6349,-90.5069],
  ["GN","Guinea","Conakry","🇬🇳","Africa/Conakry",9.6412,-13.5784],
  ["GW","Guinea-Bissau","Bissau","🇬🇼","Africa/Bissau",11.8817,-15.6170],
  ["GY","Guyana","Georgetown","🇬🇾","America/Guyana",6.8013,-58.1551],
  ["HT","Haiti","Port-au-Prince","🇭🇹","America/Port-au-Prince",18.5944,-72.3074],
  ["HN","Honduras","Tegucigalpa","🇭🇳","America/Tegucigalpa",14.0723,-87.1921],
  ["HU","Hungary","Budapest","🇭🇺","Europe/Budapest",47.4979,19.0402],
  ["IS","Iceland","Reykjavik","🇮🇸","Atlantic/Reykjavik",64.1466,-21.9426],
  ["IN","India","New Delhi","🇮🇳","Asia/Kolkata",28.6139,77.2090],
  ["ID","Indonesia","Jakarta","🇮🇩","Asia/Jakarta",-6.2088,106.8456],
  ["IR","Iran","Tehran","🇮🇷","Asia/Tehran",35.6892,51.3890],
  ["IQ","Iraq","Baghdad","🇮🇶","Asia/Baghdad",33.3152,44.3661],
  ["IE","Ireland","Dublin","🇮🇪","Europe/Dublin",53.3498,-6.2603],
  ["IL","Israel","Jerusalem","🇮🇱","Asia/Jerusalem",31.7683,35.2137],
  ["IT","Italy","Rome","🇮🇹","Europe/Rome",41.9028,12.4964],
  ["JM","Jamaica","Kingston","🇯🇲","America/Jamaica",18.0179,-76.8099],
  ["JP","Japan","Tokyo","🇯🇵","Asia/Tokyo",35.6762,139.6503],
  ["JO","Jordan","Amman","🇯🇴","Asia/Amman",31.9454,35.9284],
  ["KZ","Kazakhstan","Astana","🇰🇿","Asia/Almaty",51.1694,71.4491],
  ["KE","Kenya","Nairobi","🇰🇪","Africa/Nairobi",-1.2921,36.8219],
  ["KI","Kiribati","South Tarawa","🇰🇮","Pacific/Tarawa",1.4518,173.0340],
  ["KP","North Korea","Pyongyang","🇰🇵","Asia/Pyongyang",39.0392,125.7625],
  ["KR","South Korea","Seoul","🇰🇷","Asia/Seoul",37.5665,126.9780],
  ["KW","Kuwait","Kuwait City","🇰🇼","Asia/Kuwait",29.3759,47.9774],
  ["KG","Kyrgyzstan","Bishkek","🇰🇬","Asia/Bishkek",42.8746,74.5698],
  ["LA","Laos","Vientiane","🇱🇦","Asia/Vientiane",17.9757,102.6331],
  ["LV","Latvia","Riga","🇱🇻","Europe/Riga",56.9496,24.1052],
  ["LB","Lebanon","Beirut","🇱🇧","Asia/Beirut",33.8938,35.5018],
  ["LS","Lesotho","Maseru","🇱🇸","Africa/Maseru",-29.3151,27.4869],
  ["LR","Liberia","Monrovia","🇱🇷","Africa/Monrovia",6.3156,-10.8074],
  ["LY","Libya","Tripoli","🇱🇾","Africa/Tripoli",32.8872,13.1913],
  ["LI","Liechtenstein","Vaduz","🇱🇮","Europe/Vaduz",47.1410,9.5209],
  ["LT","Lithuania","Vilnius","🇱🇹","Europe/Vilnius",54.6872,25.2797],
  ["LU","Luxembourg","Luxembourg","🇱🇺","Europe/Luxembourg",49.6116,6.1319],
  ["MG","Madagascar","Antananarivo","🇲🇬","Indian/Antananarivo",-18.8792,47.5079],
  ["MW","Malawi","Lilongwe","🇲🇼","Africa/Blantyre",-13.9626,33.7741],
  ["MY","Malaysia","Kuala Lumpur","🇲🇾","Asia/Kuala_Lumpur",3.1390,101.6869],
  ["MV","Maldives","Male","🇲🇻","Indian/Maldives",4.1755,73.5093],
  ["ML","Mali","Bamako","🇲🇱","Africa/Bamako",12.6392,-8.0029],
  ["MT","Malta","Valletta","🇲🇹","Europe/Malta",35.8989,14.5146],
  ["MH","Marshall Islands","Majuro","🇲🇭","Pacific/Majuro",7.1164,171.1850],
  ["MR","Mauritania","Nouakchott","🇲🇷","Africa/Nouakchott",18.0735,-15.9582],
  ["MU","Mauritius","Port Louis","🇲🇺","Indian/Mauritius",-20.1609,57.5012],
  ["MX","Mexico","Mexico City","🇲🇽","America/Mexico_City",19.4326,-99.1332],
  ["FM","Micronesia","Palikir","🇫🇲","Pacific/Pohnpei",6.9248,158.1618],
  ["MD","Moldova","Chisinau","🇲🇩","Europe/Chisinau",47.0105,28.8638],
  ["MC","Monaco","Monaco","🇲🇨","Europe/Monaco",43.7384,7.4246],
  ["MN","Mongolia","Ulaanbaatar","🇲🇳","Asia/Ulaanbaatar",47.8864,106.9057],
  ["ME","Montenegro","Podgorica","🇲🇪","Europe/Podgorica",42.4304,19.2594],
  ["MA","Morocco","Rabat","🇲🇦","Africa/Casablanca",34.0209,-6.8416],
  ["MZ","Mozambique","Maputo","🇲🇿","Africa/Maputo",-25.9692,32.5732],
  ["MM","Myanmar","Naypyidaw","🇲🇲","Asia/Yangon",19.7633,96.0785],
  ["NA","Namibia","Windhoek","🇳🇦","Africa/Windhoek",-22.5609,17.0658],
  ["NR","Nauru","Yaren","🇳🇷","Pacific/Nauru",-0.5477,166.9209],
  ["NP","Nepal","Kathmandu","🇳🇵","Asia/Kathmandu",27.7172,85.3240],
  ["NL","Netherlands","Amsterdam","🇳🇱","Europe/Amsterdam",52.3676,4.9041],
  ["NZ","New Zealand","Wellington","🇳🇿","Pacific/Auckland",-41.2866,174.7756],
  ["NI","Nicaragua","Managua","🇳🇮","America/Managua",12.1140,-86.2362],
  ["NE","Niger","Niamey","🇳🇪","Africa/Niamey",13.5116,2.1254],
  ["NG","Nigeria","Abuja","🇳🇬","Africa/Lagos",9.0765,7.3986],
  ["MK","North Macedonia","Skopje","🇲🇰","Europe/Skopje",42.0000,21.4333],
  ["NO","Norway","Oslo","🇳🇴","Europe/Oslo",59.9139,10.7522],
  ["OM","Oman","Muscat","🇴🇲","Asia/Muscat",23.5880,58.3829],
  ["PK","Pakistan","Islamabad","🇵🇰","Asia/Karachi",33.6844,73.0479],
  ["PW","Palau","Ngerulmud","🇵🇼","Pacific/Palau",7.5006,134.6242],
  ["PS","Palestine","Ramallah","🇵🇸","Asia/Hebron",31.9038,35.2034],
  ["PA","Panama","Panama City","🇵🇦","America/Panama",8.9824,-79.5199],
  ["PG","Papua New Guinea","Port Moresby","🇵🇬","Pacific/Port_Moresby",-9.4438,147.1803],
  ["PY","Paraguay","Asuncion","🇵🇾","America/Asuncion",-25.2637,-57.5759],
  ["PE","Peru","Lima","🇵🇪","America/Lima",-12.0464,-77.0428],
  ["PH","Philippines","Manila","🇵🇭","Asia/Manila",14.5995,120.9842],
  ["PL","Poland","Warsaw","🇵🇱","Europe/Warsaw",52.2297,21.0122],
  ["PT","Portugal","Lisbon","🇵🇹","Europe/Lisbon",38.7223,-9.1393],
  ["QA","Qatar","Doha","🇶🇦","Asia/Qatar",25.2854,51.5310],
  ["RO","Romania","Bucharest","🇷🇴","Europe/Bucharest",44.4268,26.1025],
  ["RU","Russia","Moscow","🇷🇺","Europe/Moscow",55.7558,37.6173],
  ["RW","Rwanda","Kigali","🇷🇼","Africa/Kigali",-1.9441,30.0619],
  ["KN","Saint Kitts and Nevis","Basseterre","🇰🇳","America/St_Kitts",17.3026,-62.7177],
  ["LC","Saint Lucia","Castries","🇱🇨","America/St_Lucia",14.0101,-60.9875],
  ["VC","Saint Vincent and the Grenadines","Kingstown","🇻🇨","America/St_Vincent",13.1600,-61.2248],
  ["WS","Samoa","Apia","🇼🇸","Pacific/Apia",-13.8333,-171.7667],
  ["SM","San Marino","San Marino","🇸🇲","Europe/San_Marino",43.9424,12.4578],
  ["ST","Sao Tome and Principe","Sao Tome","🇸🇹","Africa/Sao_Tome",0.3365,6.7273],
  ["SA","Saudi Arabia","Riyadh","🇸🇦","Asia/Riyadh",24.7136,46.6753],
  ["SN","Senegal","Dakar","🇸🇳","Africa/Dakar",14.7167,-17.4677],
  ["RS","Serbia","Belgrade","🇷🇸","Europe/Belgrade",44.7866,20.4489],
  ["SC","Seychelles","Victoria","🇸🇨","Indian/Mahe",-4.6191,55.4513],
  ["SL","Sierra Leone","Freetown","🇸🇱","Africa/Freetown",8.4657,-13.2317],
  ["SG","Singapore","Singapore","🇸🇬","Asia/Singapore",1.3521,103.8198],
  ["SK","Slovakia","Bratislava","🇸🇰","Europe/Bratislava",48.1486,17.1077],
  ["SI","Slovenia","Ljubljana","🇸🇮","Europe/Ljubljana",46.0569,14.5058],
  ["SB","Solomon Islands","Honiara","🇸🇧","Pacific/Guadalcanal",-9.4456,159.9729],
  ["SO","Somalia","Mogadishu","🇸🇴","Africa/Mogadishu",2.0469,45.3182],
  ["ZA","South Africa","Pretoria","🇿🇦","Africa/Johannesburg",-25.7479,28.2293],
  ["SS","South Sudan","Juba","🇸🇸","Africa/Juba",4.8594,31.5713],
  ["ES","Spain","Madrid","🇪🇸","Europe/Madrid",40.4168,-3.7038],
  ["LK","Sri Lanka","Sri Jayawardenepura Kotte","🇱🇰","Asia/Colombo",6.9271,79.8612],
  ["SD","Sudan","Khartoum","🇸🇩","Africa/Khartoum",15.5007,32.5599],
  ["SR","Suriname","Paramaribo","🇸🇷","America/Paramaribo",5.8520,-55.2038],
  ["SE","Sweden","Stockholm","🇸🇪","Europe/Stockholm",59.3293,18.0686],
  ["CH","Switzerland","Bern","🇨🇭","Europe/Zurich",46.9480,7.4474],
  ["SY","Syria","Damascus","🇸🇾","Asia/Damascus",33.5138,36.2765],
  ["TJ","Tajikistan","Dushanbe","🇹🇯","Asia/Dushanbe",38.5598,68.7870],
  ["TZ","Tanzania","Dodoma","🇹🇿","Africa/Dar_es_Salaam",-6.1630,35.7516],
  ["TH","Thailand","Bangkok","🇹🇭","Asia/Bangkok",13.7563,100.5018],
  ["TL","Timor-Leste","Dili","🇹🇱","Asia/Dili",-8.5569,125.5603],
  ["TG","Togo","Lome","🇹🇬","Africa/Lome",6.1256,1.2254],
  ["TO","Tonga","Nuku'alofa","🇹🇴","Pacific/Tongatapu",-21.1393,-175.2049],
  ["TT","Trinidad and Tobago","Port of Spain","🇹🇹","America/Port_of_Spain",10.6549,-61.5019],
  ["TN","Tunisia","Tunis","🇹🇳","Africa/Tunis",36.8065,10.1815],
  ["TR","Turkey","Ankara","🇹🇷","Europe/Istanbul",39.9334,32.8597],
  ["TM","Turkmenistan","Ashgabat","🇹🇲","Asia/Ashgabat",37.9601,58.3261],
  ["TV","Tuvalu","Funafuti","🇹🇻","Pacific/Funafuti",-8.5211,179.1942],
  ["UG","Uganda","Kampala","🇺🇬","Africa/Kampala",0.3476,32.5825],
  ["UA","Ukraine","Kyiv","🇺🇦","Europe/Kyiv",50.4501,30.5234],
  ["AE","United Arab Emirates","Abu Dhabi","🇦🇪","Asia/Dubai",24.4539,54.3773],
  ["GB","United Kingdom","London","🇬🇧","Europe/London",51.5074,-0.1278],
  ["US","United States","Washington, D.C.","🇺🇸","America/New_York",38.9072,-77.0369],
  ["UY","Uruguay","Montevideo","🇺🇾","America/Montevideo",-34.9011,-56.1645],
  ["UZ","Uzbekistan","Tashkent","🇺🇿","Asia/Tashkent",41.2995,69.2401],
  ["VU","Vanuatu","Port Vila","🇻🇺","Pacific/Efate",-17.7333,168.3273],
  ["VA","Vatican City","Vatican City","🇻🇦","Europe/Vatican",41.9029,12.4534],
  ["VE","Venezuela","Caracas","🇻🇪","America/Caracas",10.4806,-66.9036],
  ["VN","Vietnam","Hanoi","🇻🇳","Asia/Ho_Chi_Minh",21.0278,105.8342],
  ["YE","Yemen","Sanaa","🇾🇪","Asia/Aden",15.3694,44.1910],
  ["ZM","Zambia","Lusaka","🇿🇲","Africa/Lusaka",-15.3875,28.3228],
  ["ZW","Zimbabwe","Harare","🇿🇼","Africa/Harare",-17.8252,31.0335]
];


// Convert the raw country list into location objects
const locations = countries.map(
  ([code, country, city, flag, timezone, lat, lon]) => ({
    code,
    country,
    city,
    flag,
    timezone,
    lat,
    lon
  })
);


// ============================================================
// CLOCK
// ============================================================

let clockTimer;

const requestedTimezone =
  new URLSearchParams(window.location.search).get("timezone");

const savedTimezone =
  requestedTimezone ||
  localStorage.getItem("worldInfoTimezone") ||
  locations.find(location => location.code === "IN")?.timezone ||
  locations[0].timezone;


function getLocation(timezone) {
  return (
    locations.find(location => location.timezone === timezone) ||
    locations[0]
  );
}


function updateTime(location) {
  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");

  if (!timeEl) return;

  const now = new Date();

  const timeFormatter = new Intl.DateTimeFormat([], {
    timeZone: location.timezone,
    hour12: true,
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

  if (dateEl) {
    dateEl.textContent = dateFormatter.format(now);
  }
}


// ============================================================
// WEATHER
// ============================================================

function weatherDescription(code, isDay = 1) {
  const descriptions = {
    0: isDay ? ["Clear sky", "☀️"] : ["Clear sky", "🌙"],
    1: isDay ? ["Mainly clear", "🌤️"] : ["Mainly clear", "☁️"],
    2: ["Partly cloudy", "⛅"],
    3: ["Overcast", "☁️"],
    45: ["Foggy", "🌫️"],
    48: ["Freezing fog", "🌫️❄️"],
    51: ["Light drizzle", "🌧️"],
    53: ["Drizzle", "🌧️"],
    55: ["Heavy drizzle", "🌧️"],
    56: ["Freezing drizzle", "🌧️❄️"],
    57: ["Heavy freezing drizzle", "🌧️❄️"],
    61: ["Light rain", "🌦️"],
    63: ["Rain", "🌧️"],
    65: ["Heavy rain", "🌧️"],
    66: ["Freezing rain", "🌧️❄️"],
    67: ["Heavy freezing rain", "🌧️❄️"],
    71: ["Light snow", "🌨️"],
    73: ["Snow", "❄️"],
    75: ["Heavy snow", "❄️"],
    77: ["Snow grains", "❄️"],
    80: ["Rain showers", "🌦️"],
    81: ["Rain showers", "🌧️"],
    82: ["Heavy rain showers", "⛈️"],
    85: ["Snow showers", "🌨️"],
    86: ["Heavy snow showers", "❄️"],
    95: ["Thunderstorm", "🌩️"],
    96: ["Thunderstorm with hail", "⛈️"],
    99: ["Thunderstorm with heavy hail", "⛈️"]
  };

  return descriptions[code] || ["Conditions unavailable", "❓"];
}


function setLoading(isLoading) {
  const button = document.getElementById("showInfo");
  const status = document.getElementById("status");
  const skeleton = document.getElementById("skeletonLoader");
  const content = document.getElementById("weatherContent");

  if (button) {
    button.disabled = isLoading;
    button.textContent = isLoading
      ? "Loading..."
      : "Refresh weather";
  }

  if (status && isLoading) {
    status.textContent = "Fetching the latest weather...";
  }

  if (skeleton && content) {
    if (isLoading) {
      skeleton.classList.remove("hidden");
      content.classList.add("hidden");
    } else {
      skeleton.classList.add("hidden");
      content.classList.remove("hidden");
    }
  }
}


async function getInfo() {
  const select = document.getElementById("countrySelect");
  const weatherEl = document.getElementById("weather");
  const details = document.getElementById("weatherDetails");
  const status = document.getElementById("status");

  if (!select || !weatherEl) return;

  const location = getLocation(select.value);

  localStorage.setItem(
    "worldInfoTimezone",
    location.timezone
  );

  clearInterval(clockTimer);

  updateTime(location);

  clockTimer = setInterval(
    () => updateTime(location),
    1000
  );

  setLoading(true);

  weatherEl.textContent = "Weather: loading...";

  try {
    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${location.lat}` +
      `&longitude=${location.lon}` +
      `&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day` +
      `&daily=sunrise,sunset` +
      `&timezone=auto`;

    const weatherRes = await fetch(url);

    if (!weatherRes.ok) {
      throw new Error("Weather request failed");
    }

    const weatherData = await weatherRes.json();

    const current = weatherData.current;
    const daily = weatherData.daily;
    const units = weatherData.current_units;

    const [description, icon] =
      weatherDescription(current.weather_code, current.is_day);

    weatherEl.textContent =
      `${icon} ${description} · ` +
      `${Math.round(current.temperature_2m)}` +
      `${units.temperature_2m}`;
      
    // Dynamic background based on time of day
    const infoBox = document.getElementById('infoBox');
    if (infoBox) {
        if (current.is_day === 0) {
            infoBox.style.backgroundColor = 'var(--panel)';
            infoBox.style.color = 'var(--ink)';
            infoBox.style.borderLeftColor = 'var(--muted)';
        } else {
            infoBox.style.backgroundColor = 'var(--mint)';
            infoBox.style.color = '';
            infoBox.style.borderLeftColor = 'var(--coral)';
        }
    }

    if (details) {
      let sunriseStr = "--:--";
      let sunsetStr = "--:--";
      if (daily && daily.sunrise && daily.sunrise[0]) {
          sunriseStr = new Date(daily.sunrise[0]).toLocaleTimeString([], {timeZone: location.timezone, hour: '2-digit', minute:'2-digit'});
          sunsetStr = new Date(daily.sunset[0]).toLocaleTimeString([], {timeZone: location.timezone, hour: '2-digit', minute:'2-digit'});
      }

      details.innerHTML = `
        <span>
          Feels like
          <strong>
            ${Math.round(current.apparent_temperature)}
            ${units.apparent_temperature}
          </strong>
        </span>

        <span>
          Wind
          <strong>
            ${Math.round(current.wind_speed_10m)}
            ${units.wind_speed_10m}
          </strong>
        </span>

        <span>
          Humidity
          <strong>
            ${current.relative_humidity_2m}
            ${units.relative_humidity_2m}
          </strong>
        </span>
        
        <span>
          Sunrise
          <strong>${sunriseStr}</strong>
        </span>
        
        <span>
          Sunset
          <strong>${sunsetStr}</strong>
        </span>
      `;
    }

    if (status) {
      status.textContent =
        `Updated just now for ${location.city}.`;
    }
    
    // Call new UI update functions
    if (typeof updateTimeDiff === 'function') updateTimeDiff(location);
    if (typeof initMap === 'function') initMap(location.lat, location.lon);

  } catch (error) {
    console.error("Weather error:", error);

    weatherEl.textContent =
      "Weather unavailable right now";

    if (details) {
      details.innerHTML =
        "<span>Check your connection and try again.</span>";
    }

    if (status) {
      status.textContent =
        "We could not reach the weather service.";
    }

  } finally {
    setLoading(false);
  }
}


// ============================================================
// COUNTRY SELECTOR
// ============================================================

function populateLocations() {
  const select =
    document.getElementById("countrySelect");

  if (!select) return;

  select.innerHTML = locations
    .map(location => `
      <option value="${location.timezone}">
        ${location.flag}
        ${location.city}, ${location.country}
      </option>
    `)
    .join("");

  const savedLocation =
    locations.find(
      location => location.timezone === savedTimezone
    );

  select.value =
    savedLocation?.timezone ||
    locations.find(location => location.code === "IN")
      ?.timezone ||
    locations[0].timezone;

  select.addEventListener(
    "change",
    getInfo
  );

  const refreshButton =
    document.getElementById("showInfo");

  if (refreshButton) {
    refreshButton.addEventListener(
      "click",
      getInfo
    );
  }
}


// ============================================================
// COUNTRY CARDS
// ============================================================

function renderCountries(searchTerm = "") {
  const grid =
    document.getElementById("countryGrid");

  if (!grid) return;

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const sortedLocations =
    [...locations].sort(
      (a, b) =>
        a.country.localeCompare(b.country)
    );
  const matchingLocations = sortedLocations.filter(location =>
    [location.country, location.city, location.code]
      .some(value => value.toLowerCase().includes(normalizedSearch))
  );

  grid.innerHTML = matchingLocations
    .map(location => `
      <article class="country-card">

        <span
          class="country-flag"
          aria-hidden="true"
        >
          ${location.flag}
        </span>

        <div>
          <h2>${location.country}</h2>
          <p>${location.city}</p>
        </div>

        <a
          href="weather.html?timezone=${encodeURIComponent(location.timezone)}"
        >
          View weather
          <span aria-hidden="true">→</span>
        </a>

      </article>
    `)
    .join("");

  const status = document.getElementById("searchStatus");
  if (status) {
    status.textContent = normalizedSearch
      ? `${matchingLocations.length} ${matchingLocations.length === 1 ? "country" : "countries"} found`
      : `${locations.length} countries available`;
  }
}

function setupCountrySearch() {
  const searchInput = document.getElementById("countrySearch");
  if (!searchInput) return;

  searchInput.addEventListener("input", event => {
    renderCountries(event.target.value);
  });
}


// ============================================================
// START APPLICATION
// ============================================================

populateLocations();
renderCountries();
setupCountrySearch();

if (document.getElementById("countrySelect")) {
  getInfo();
}


// Check that the list contains exactly 195 countries
console.log(
  `World Info loaded ${locations.length} countries.`
);

if (locations.length !== 195) {
  console.warn(
    `Expected 195 countries but found ${locations.length}.`
  );
}

// ============================================================
// NEW ENHANCEMENTS: DARK MODE, MAP, AND TIME DIFF
// ============================================================

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

if (themeToggle) {
  themeToggle.querySelector('.theme-icon').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.querySelector('.theme-icon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
}

// Map Logic
let map;
let marker;

function initMap(lat, lon) {
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;
  
  if (!map) {
    map = L.map('map').setView([lat, lon], 4);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);
    marker = L.marker([lat, lon]).addTo(map);
  } else {
    map.flyTo([lat, lon], 5);
    marker.setLatLng([lat, lon]);
  }
}

// Time Difference
function updateTimeDiff(location) {
  const diffEl = document.getElementById('timeDiff');
  if (!diffEl) return;

  const localNow = new Date();
  const targetStr = localNow.toLocaleString('en-US', {timeZone: location.timezone});
  const localStr = localNow.toLocaleString('en-US');
  const targetTime = new Date(targetStr).getTime();
  const localTime = new Date(localStr).getTime();
  
  const diffHours = Math.round((targetTime - localTime) / 3600000);
  
  if (diffHours === 0) diffEl.textContent = "Same as local time";
  else if (diffHours > 0) diffEl.textContent = `${diffHours} hour${diffHours > 1 ? 's' : ''} ahead of local time`;
  else diffEl.textContent = `${Math.abs(diffHours)} hour${Math.abs(diffHours) > 1 ? 's' : ''} behind local time`;
}
