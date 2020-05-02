# Selecting Multiple Elements

1. For example, if a website has multiple 'h2' elements, we can select them all using jQuery:
```javascript
$("h2")
```
This retuns a list of all 'h2' elements in the HTML.
2. Using the 'text()' function will return all texts from each 'h2' element on one line; 
3. To print the text content of one 'h2' per line, we can use the 'each()' function by passing an arrow function accessing each element individually:
```javascript
$("h2").each((index, element) => console.log($(element).text()))
```

## Source:
- Udemy Course - Web Scraping in Nodejs & JavaScript - Section 3: Intro to CSS Selectors and tools we use for scraping - Selecting multiple elements.