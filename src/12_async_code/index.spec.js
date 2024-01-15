'use strict';

const { throwError, getSomeData, simpleError } = require('./myModule');

describe('Error tests', () => {
  test('Test cae without error', async () => {
    const data = await getSomeData();
    expect(data).toBe('Some Data');
  });

  test('Test error with try catch block 2', async () => {
    try {
      await throwError();
    } catch (err) {
      expect(err).toStrictEqual(new Error('Not Fetched Data'));
    }
  });

  test('Test error with try catch block 3', async () => {
    try {
      await throwError();
    } catch (err) {
        expect(err).toHaveProperty('message', 'Not Fetched Data');
        expect(err).toBeInstanceOf(Error); // can be custom error
    }
  });

  test('Simple error test synchronous', () => {
    expect(() => simpleError()).toThrow(new Error('Simple Error happened'));
  });

  test('Simple error test synchronous', () => {
    expect(() => simpleError()).toThrowError(new Error('Simple Error happened'));
  });

  test('Expect synchronous Error', () => {
    expect(throwError()).rejects.toThrowError(Error);
  });

  test('Inline rejects values with catch', async () => {
    await throwError().catch(err => expect(err).toStrictEqual(new Error('Not Fetched Data')));
  });

  test('Inline resolve value', async () => {
    expect(getSomeData()).resolves.toMatch('Some Data');
  });

  test('Inline rejects value', async () => {
    expect(throwError()).rejects.toStrictEqual(new Error('Not Fetched Data'));
  });
});
