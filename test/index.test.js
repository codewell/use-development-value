const useDevelopmentUrl = require('../src');

const originalUrl = '/api';
const developmentUrl = 'http://localhost:8000/api';

/**
 * Production
 */

test('Production URL', () => {
  process.env.NODE_ENV = 'production';
  expect(useDevelopmentUrl(originalUrl, developmentUrl)).toBe(originalUrl);
});

/**
 * Development
 */

test('Development URL', () => {
  process.env.NODE_ENV = 'development';
  expect(useDevelopmentUrl(originalUrl, developmentUrl)).toBe(developmentUrl);
});
