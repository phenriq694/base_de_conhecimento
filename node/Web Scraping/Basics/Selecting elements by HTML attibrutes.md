# Selecting Elements by HTML attributes

HTML example:
```html
<h1 class="red">I'm a h1 element with "red" class!</h1>
<h1 class="red" data-customer="22293">
      I have a "red" class too! And a attribute!
</h1>
```
1. To select an element with a specific attribute and value using jQuery:
```javascript
$('[data-customer="22293"]').text();
```

2. To select all elements with a specific attriburte using jQuery:
```javascript
$('[data-customer]').text();
```

## Source:
- Udemy Course - Web Scraping in Nodejs & JavaScript - Section 3: Intro to CSS Selectors and tools we use for scraping - Selecting using HTML attributes.