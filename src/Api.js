

async function postData(url = 'https://restcountries.eu/rest/v2/region/europe?fields=name;capital', data = {}) {
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
}

export default postData
