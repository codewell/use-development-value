const useDevelopmentValue = require('../src');

const originalString = 'foo';
const developmentString = 'dev-foo';

const number = 1;
const developmentNumber = 2;

const object = { foo: 'foo' };
const developmentObject = { foo: 'dev:foo' };

/**
 * Production
 */

test('Production string', () => {
  process.env.NODE_ENV = 'production';
  expect(useDevelopmentValue(originalString, developmentString)).toBe(originalString);
});

test('Production number', () => {
  process.env.NODE_ENV = 'production';
  expect(useDevelopmentValue(number, developmentNumber)).toBe(number);
});

test('Production object', () => {
  process.env.NODE_ENV = 'production';
  expect(useDevelopmentValue(object, developmentObject)).toEqual(object);
});

/**
 * Development
 */

test('Development string', () => {
  process.env.NODE_ENV = 'development';
  expect(useDevelopmentValue(originalString, developmentString)).toBe(developmentString);
});

test('Development number', () => {
  process.env.NODE_ENV = 'development';
  expect(useDevelopmentValue(number, developmentNumber)).toBe(developmentNumber);
});

test('Development oobject', () => {
  process.env.NODE_ENV = 'development';
  expect(useDevelopmentValue(object, developmentObject)).toEqual(developmentObject);
});
