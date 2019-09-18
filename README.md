# @codewell/use-development-value
Switch between urls in development mode and production mode

## Installation
```
npm install @codewell/use-development-value
```

## Basic usage
```JavaScript
import useDevelopmentValue from '@codewell/use-development-value';

const originalValue = 'foo';
const developmentValue = 'dev-foo';

// Uses process.env.NODE_ENV to switch between the urls
const value = useDevelopmentValue(originalValue, developmentValue);
```
