// Output: function
console.log(typeof Object)

// Output: object
console.log(typeof new Object)

const Client = function() {}
// Output: function
console.log(typeof Client)
// Output: object
console.log(typeof new Client)

class Product {}
// Output: function
console.log(typeof Product)
// Output: object
console.log(typeof new Product())