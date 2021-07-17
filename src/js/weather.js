function success(pos) {
  const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#city").textContent = data.timezone;
      document.querySelector("#temp").textContent = data.current.temp + "°C";
      document.querySelector("#main").textContent =
        data.current.weather[0].main;
      document.querySelector("#desc").textContent =
        data.current.weather[0].description;

      document.querySelector("#weather").classList.remove("hidden");
    });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}
