'use strict';

const { someHelper } = require('./helper');
const { User } = require('./example/user');

jest.mock('./helper', () => {
  return {
    someHelper: jest.fn().mockImplementation(() => {
      return {
        info: 'Mocked INFO'
      }
    })
  }
});

jest.mock('./example/user', () => {
  return {
    User: jest.fn().mockImplementation(() => {
      return {
        send: () => 'mocked data',
      }
    })
  }
});

describe('Non default test', () => {
  it('should test mocked value', () => {
    const result = someHelper();
    expect(result).toStrictEqual({ info: 'Mocked INFO' });
  });

  it('should test mocked data',  () => {
    const result = new User().send();
    expect(result).toEqual('mocked data');
  });
});
