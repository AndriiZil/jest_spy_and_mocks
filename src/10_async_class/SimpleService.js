'use strict';

class SimpleService {

  createMessage() {
    return Promise.resolve('createMessage');
  }

  receiveMessage() {
    return Promise.resolve('receiveMessage');
  }
}

module.exports = SimpleService;
