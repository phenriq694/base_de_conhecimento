# Creating a Basic Web Scrapping

1. Install the follwing packages:
```bash
yarn add request request-promise cheerio
```
request and request-promise simplifies downloading a website.
cheerio allows to use jQuery selectors within Nodejs.

2. Import the downloaded packages;
3. Import the 'fs' package for create a file with the content of an HTML downloaded from a website;
4. Create an async function and get the HTML using 'request-promise' 'get' method, passing the URL of the destinantion website;
5. Use the 'fs' module to create a HTML file with the data returned from the request;
6. Use the 'cheerio' to allow use jQuery selectors in the HTML downloaded;
7. Access the an element;
```javascript
const request = require("request-promise"); // 2
const cheerio = require("cheerio"); // 2
const fs = require("fs"); // 3

async function main() {
  const html = await request.get(
    "https://reactnativetutorial.net/css-selectors"
  );  // 4

  fs.writeFileSync("./test.html", html); // 5
  
  const $ = await cheerio.load(html); // 6
  const theText = $("h1").text(); // 7
  console.log(theText);
}

main()
``` 

## Source:
- Udemy Course - Web Scraping in Nodejs & JavaScript - Section 3: Intro to CSS Selectors and tools we use for scraping - Building our firt scraper.