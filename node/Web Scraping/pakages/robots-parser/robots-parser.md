# robots-parser

1. Install package:
```
yarn add robots-parser
```

2. Example:
```javascript
const robotsParser = require("robots-parser");
const request = require("request-promise");

const robotsUrl = "https://textfiles.meulie.net/robots.txt";

async function getRobotsTxt(robotsUrl) {
  const robotTxt = await request.get(robotsUrl);
  const robots = robotsParser(robotsUrl, robotTxt);
  console.log(robots.isAllowed("https://textfiles.meulie.net/100/", "PauloBot"));
  console.log(robots.isAllowed("https://textfiles.meulie.net/100/", "rogerbot"));
}

getRobotsTxt(robotsUrl);
``` 