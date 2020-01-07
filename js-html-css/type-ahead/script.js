(function() {
  const input = document.querySelector('#searchCityInputId');
  const suggestions = document.querySelector('#suggestionsId');

  const citiesEndpoint = 'assets/mock-city-list.json';
  let cityList = null;

  fetch(citiesEndpoint)
    .then(raw => raw.json())
    .then(cities => cityList = [ ... cities ])
    .catch(console.log)
    .finally(() => {
      if (cityList) {
        input.addEventListener('change', showMatches);
        input.addEventListener('keyup', showMatches);
        console.log('list fetched successfully');
      }
    });

  function showMatches() {
    const matchedCities = findMatched(this.value, cityList);
    const typedText = new RegExp(this.value, 'gi');
    const html = matchedCities.map(match => {
      const cityName = match.city.replace(typedText, `<span class="highlighted">${this.value}</span>`);
      return `<li><span>${cityName}</span></li>`;
    });
    suggestions.innerHTML = html.join('');
  }
})();

function findMatched (searchCity, cityList) {
  const checkMatch = new RegExp(searchCity, 'gi');
  return cityList.filter(cityItem => cityItem.city.match(checkMatch));
}

function fetchData(apiUrl = '', header = {}, params = {}) {
  const url = new URL(apiUrl);
  const headers = new Headers({ ...header });
  url.search = new URLSearchParams({ ...params }).toString();
  return fetch(url, { headers });
}
