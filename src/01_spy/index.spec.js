'use strict';

const MyClass = require('./myModule');
const SoundPlayer = require('./soundPlayer');

const myObj = {
  doSomething() {
    console.log('does something');
  }
};

describe('', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('spy object', () => {
    const somethingSpy = jest.spyOn(myObj, 'doSomething');

    myObj.doSomething();
    expect(somethingSpy).toHaveBeenCalledTimes(1);
  });

  test('spy on Class', () => {
    const spyOnUsualMethod = jest.spyOn(MyClass.prototype, 'myInstanceMethod');
    const spyOnStaticMethod = jest.spyOn(MyClass, 'myStaticMethod');

    new MyClass().myInstanceMethod();
    MyClass.myStaticMethod();

    expect(spyOnUsualMethod).toHaveBeenCalledTimes(1);
    expect(spyOnStaticMethod).toHaveBeenCalledTimes(1);
  });

  test('spy on Get & static', () => {
    const getterSpy = jest
      .spyOn(SoundPlayer.prototype, 'foo', 'get')
      .mockImplementation(() => 'mocked-result');

    const staticSpy = jest.spyOn(SoundPlayer, 'brand')
      .mockImplementation(() => 'static-method');

    new SoundPlayer().foo;
    SoundPlayer.brand();

    expect(getterSpy).toHaveBeenCalledTimes(1);
    expect(staticSpy).toHaveBeenCalledTimes(1);
  });

  test('spy on public method', () => {
    const publicSpy = jest
      .spyOn(SoundPlayer.prototype, 'playSoundFile')
      .mockImplementation(() => 'mocked-public-method')

    new SoundPlayer().playSoundFile();

    expect(publicSpy).toHaveBeenCalledTimes(1);
  });
});
