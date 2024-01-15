'use strict';

const myModule = require('./myModule');

myModule.getMyName = jest.fn(() => 'Hey Mocked getMyName');
myModule.callSomeApi = jest.fn(() => 'Hey Mocked callSomeApi');

describe('Test MyModule', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('getMyName Test', () => {
    expect(myModule.getMyName()).toBe('Hey Mocked getMyName');
  });

  test('callSomeApi Test', () => {
    expect(myModule.callSomeApi()).toBe('Hey Mocked callSomeApi');
  });
});
