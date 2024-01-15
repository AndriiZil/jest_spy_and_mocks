'use strict';

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

describe('Jest Matchers', () => {
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test('zero', () => {
    const zero = 0;

    expect(zero).not.toBeNull();
    expect(zero).toBeDefined();
    expect(zero).not.toBeUndefined();
    expect(zero).toBe(0);
    expect(zero).toEqual(0);
    expect(zero).toBeFalsy();
    expect(zero).not.toBeTruthy();
  });

  test('numbers', () => {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(5);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThanOrEqual(4);
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('strings', () => {
    const testString = 'Chicago';

    expect(testString).toMatch(/ago/);
    expect(testString).not.toMatch(/e/);
  });

  test('arrays', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'milk',
    ];

    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  test('objects', () => {
    const someData = {
      name: 'Test',
      value: 'Object Value'
    };

    expect(someData).toStrictEqual({ name: 'Test', value: 'Object Value' });
  });

  test('exceptions', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });
});
