'use strict';

const Request = require('./Request');
const SimpleService = require('./SimpleService');

jest.mock('./Request');

jest.mock('./SimpleService', () => {
  return jest.fn().mockImplementation(() => {
    return {
      createMessage: jest.fn(() => 'createMessage MOCK'),
      receiveMessage: jest.fn(() => 'receiveMessage MOCK'),
    };
  });
})

describe('Test Async class', () => {
  test('Request testing', () => {
    const requestMock = require('./Request');

    requestMock.prototype.getInfo.mockImplementation(() => 'Mocked async method');

    const result = new Request().getInfo();
    expect(result).toBe('Mocked async method');
  });

  test('test several async mocked methods', () => {
    const simpleService = new SimpleService();
    const createMessageMock = simpleService.createMessage();
    const receiveMessageMock = simpleService.receiveMessage();

    expect(createMessageMock).toBe('createMessage MOCK');
    expect(receiveMessageMock).toBe('receiveMessage MOCK');
  });
});
