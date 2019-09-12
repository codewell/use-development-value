/**
 * Use different url in production and development mode
 * @param {string} originalUrl 
 * @param {string} developmentUrl 
 */
const useDevelopmentUrl = (originalUrl, developmentUrl) => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return developmentUrl;
  }
  return originalUrl;
};

module.exports = useDevelopmentUrl;
