'use strict';

const RequestService = require('./requestService');
const CallService = require('./callService');

jest.mock('./requestService');

beforeEach(() => {
  RequestService.mockClear();
});

describe('Class automock', () => {
  test('Auto mock', () => {
    const callService = new CallService();
    expect(RequestService).toHaveBeenCalledTimes(1);
  });

  test('Test mockClear() function', () => {
    expect(RequestService).not.toHaveBeenCalled();

    const callService = new CallService();
    expect(RequestService).toHaveBeenCalledTimes(1);
    callService.makeCall();

    const mockRequestService = RequestService.mock.instances[0];
    const mockMakeRequest = mockRequestService.makeRequest;

    expect(mockMakeRequest.mock.calls[0][0]).toEqual('cool');

    expect(mockMakeRequest).toBeCalledWith('cool');
    expect(mockMakeRequest).toHaveBeenCalledTimes(1);
  });
});
