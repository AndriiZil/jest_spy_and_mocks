'use strict';

const RequestService = require('./requestService');

jest.mock('./requestService', () => {
  return jest.fn().mockImplementation(() => {
    return { makeRequest: jest.fn() }
  });
});

describe('Mock factory tests', () => {
  beforeEach(() => {
    RequestService.mockClear();
  });

  test('test if called', () => {
    new RequestService().makeRequest('test');
  })
});
