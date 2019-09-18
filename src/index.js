/**
 * Use different values in production and development mode
 * @param {any} originalValue 
 * @param {any} developmentValue 
 */
const useDevelopmentValue = (originalValue, developmentValue) => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return developmentValue;
  }
  return originalValue;
};

module.exports = useDevelopmentValue;
