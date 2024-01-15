'use strict';

const MySimpleClass = require('./mySimpleClass');

describe('Jest mock simple class', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('MOCKS', () => {
    const mySimpleClass = new MySimpleClass();

    expect(mySimpleClass.myInstanceMethodDoSomething()).toEqual('Do something');
    expect(MySimpleClass.myStaticDo()).toEqual('my Static do');

    MySimpleClass.prototype.myInstanceMethodDoSomething = jest.fn(() => {
      return 'JEST myInstanceMethodDoSomething';
    });
    MySimpleClass.myStaticDo = jest.fn(() => {
      return 'JEST myStaticDo';
    });

    expect(mySimpleClass.myInstanceMethodDoSomething()).toEqual('JEST myInstanceMethodDoSomething');
    expect(MySimpleClass.myStaticDo()).toEqual('JEST myStaticDo');
  });
});
