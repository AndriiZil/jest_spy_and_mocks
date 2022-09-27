'use strict';

const getUsersData = require('./remoteApi');
const RequestData = require('./requestData');

const mockAxios = require('axios');
jest.mock('axios');

mockAxios.get.mockResolvedValue({ data: { name: 'Jimmy Jedi' }});

describe('Async Testing', () => {
  afterEach(jest.clearAllMocks);

  it('should return the first entry from the API',  async () => {
    const result = await getUsersData(1);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(result).toBe('Jimmy Jedi');
  });

  it('should return fake data async', async () => {
    const requestData = new RequestData();
    RequestData.prototype.getData = jest.fn().mockResolvedValue({ data: ['result'] });

    const result = await requestData.getData();

    expect(result).toStrictEqual({ data: ['result'] });
  });
});
