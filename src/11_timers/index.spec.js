'use strict';

const timerGame = require('./timerGame');

describe('Timer tests with "useFakeTimers" & "spyOn"', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });

  afterAll(() => {
    jest.clearAllTimers();
  })

  test('waits 1 second before ending the game', () => {
    timerGame();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});

describe('Timer tests with "useFakeTimers"', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test('calls the callback after 1 second', () => {
    const callback = jest.fn();

    timerGame(callback);

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toHaveBeenCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('Advance Timers by Time', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('calls the callback after 1 second via advanceTimersByTime', () => {
    const callback = jest.fn();

    timerGame(callback);

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toHaveBeenCalled();

    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(1000);

    // Now our callback should have been called!
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
