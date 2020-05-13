# Jest Configuration

1. Install package:
```
yarn add jest
```

2. Create a folder called '__tests__';
3. Change the value of jest test scritp command inside the package.json file:
```json
{
  "scripts": {
    "test": "jest --watchAll"
  },
}
```

4. Example of test:
```javascript
const parser = require("../parser");

it("should give 4", () => {
  const result = parser.add(2, 2);
  expect(result).toBe(4);
});
```
5. A new file was created in the '__tests__' folder called 'parser.ters.js'. The above code was added in this file;
6. To run the test:
```
yarn run test  
```

## Source:
- Udemy Course - Web Scraping in Nodejs & JavaScript - Section 8: Building a web scraper the TDD way - Initializing project and adding packages
- Udemy Course - Web Scraping in Nodejs & JavaScript - Section 8: Building a web scraper the TDD way - Creating tests folder and setting up tes script