'use strict';

const RequestService = require('./requestService');
const CallService = require('./callService');

jest.mock('./requestService');

describe('Error test', () => {
  beforeAll(() => {
    RequestService.mockImplementation(() => {
      return {
        makeRequest: () => {
          throw new Error('Test error');
        }
      }
    })
  });

  it('should throw error', () => {
    const callService = new CallService();
    expect(() => callService.makeCall()).toThrow();
  });
})
