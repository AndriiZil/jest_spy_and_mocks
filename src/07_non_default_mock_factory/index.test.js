'use strict';

const { User } = require('./example/user');
const { someHelper, someData } = require('./helper');

jest.mock('./helper', () => {
  return {
    someHelper: jest.fn().mockImplementation(() => {
      return {
        info: 'Mocked User INFO',
      }
    }),
    someData: jest.fn().mockImplementation(() => {
      return {
        data: 'Mocked User DATA',
      }
    })
  }
});

jest.mock('./example/user', () => {
  return {
    User: jest.fn().mockImplementation(() => {
      return {
        send: () => 'mocked User data',
      }
    })
  }
});

describe('Non default test', () => {
  it('should test mocked value of "someHelper" method', () => {
    const result = someHelper();

    expect(result).toStrictEqual({ info: 'Mocked User INFO' });
  });

  it('should test mocked value of "someData" method', () => {
    const result = someData();

    expect(result).toStrictEqual({ data: 'Mocked User DATA' });
  });

  it('should test mocked data',  () => {
    const result = new User().send();

    expect(result).toEqual('mocked User data');
  });
});
