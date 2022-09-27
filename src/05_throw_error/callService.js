'use strict';

const RequestService = require('./requestService');

class CallService {
  constructor() {
    this.call = new RequestService();
  }
  makeCall() {
    this.call.makeRequest('cool');
  }
}

module.exports = CallService;
