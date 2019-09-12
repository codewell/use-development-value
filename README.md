# use-development-url
Switch between urls in development mode and production mode

## Installation
```
npm install @codewell/use-development-url
```

## Basic usage
```JavaScript
import useDevelopmentUrl from '@codewell/use-development-url';

const originalUrl = '/endpoint';
const developmentUrl = '/dev-endpoint';

// Uses process.env.NODE_ENV to switch between the urls
const url = useDevelopmentUrl(originalUrl, developmentUrl);

```
