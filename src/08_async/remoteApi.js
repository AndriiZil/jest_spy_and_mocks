'use strict';

const axios = require('axios');

function getUsersData(id) {
  return axios.get(`https://swapi.dev/api/people/${id}`).then(res => res.data.name)
}

module.exports = getUsersData;
