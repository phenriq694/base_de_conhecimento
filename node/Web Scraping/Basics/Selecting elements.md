# Selecting Elements

1. If we want to select some HTML element on a website, we can type de following code into the console tools in a web browser:
```javascript
// Selecting an element
const h1Element = document.querySelector("h1")

// Accessing the text inside de element 
h1Element.textContent
```

2. We can also use jQuery for this purpose. Many websites have the jQuery module, but if not, we can use a browser extension called 'jQuery Injector' to inject jQuery into the website and select HTML elements with less code:
```javascript
// Select the element and accessing the text inside it
$("h1").text()
```

## Source:
- Udemy Course - Web Scraping in Nodejs & JavaScript - Section 3: Intro to CSS Selectors and tools we use for scraping - Selecting our element.