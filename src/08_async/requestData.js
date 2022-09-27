'use strict';

const axios = require('axios');

class RequestData {
  async getData() {
    return axios.get('http://example.com');
  }
}

module.exports = RequestData;
