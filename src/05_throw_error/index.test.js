'use strict';

const CallService = require('./callService');
const RequestService = require('./requestService');

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
