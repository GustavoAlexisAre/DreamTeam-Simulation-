const axios = require("axios");

module.exports = function getFootballFixtures() {
  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {league: '2', season: '2022', from: '2023-02-13', to: '2023-02-15'},
    headers: {
      'X-RapidAPI-Key': '6f605d22abmshb359d7b0d088614p103d73jsna8a1241fd0a1',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  return axios.request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}