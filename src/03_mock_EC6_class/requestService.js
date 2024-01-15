'use strict';

class RequestService {
  constructor() {
    this.serviceName = 'Request Service';
  }
  makeRequest(params) {
    console.log(`Make request with "${params}"`)
  }
}

module.exports = RequestService;
