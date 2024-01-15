'use strict';

const CallService = require('./callService');
const RequestService = require('./requestService');

jest.mock('./requestService');

describe('Class automock', () => {
  beforeEach(() => {
    RequestService.mockClear();
  });

  test('Auto mock', () => {
    new CallService();
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
