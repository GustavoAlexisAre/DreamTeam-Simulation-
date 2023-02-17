const axios = require("axios");

 function getFootballFixtures() {
  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {league: '2', season: '2022', from: '2023-02-13', to: '2023-02-23'},
    headers: {
      'X-RapidAPI-Key': '6f605d22abmshb359d7b0d088614p103d73jsna8a1241fd0a1',
      'X-RapidAPI-Host':  'api-football-v1.p.rapidapi.com'
    }
  };

  return axios.request(options)
    .then(function (response) {
      const arreglo = response.data.response.map(element => {
        return element
      });
      return arreglo
    })
    .catch(function (error) {
      console.error(error);
    });
}


 function getFootballFixturesById(id) {
  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {id},
    headers: {
      'X-RapidAPI-Key': '6f605d22abmshb359d7b0d088614p103d73jsna8a1241fd0a1',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
  }
  return axios.request(options)
  .then(function (response) {
    return response.data.response
  })
  .catch(function (error) {
    console.error(error);
  });
}


module.exports = {
  getFootballFixturesById,
  getFootballFixtures
}