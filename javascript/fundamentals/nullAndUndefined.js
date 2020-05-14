let valor // uninitialized

// Output: undefined
console.log(valor)

valor = null // absence of value

// Output: null
console.log(valor)

const product = {}

// Output: undefined
console.log(product.price)

// Output: {}
console.log(product)

product.price = 3.50

// Output: { price: 3.5 }
console.log(product)

product.price = undefined // Avoid to assign 'undefined' values

// Output: false
console.log(!!product.price)

// Output: { price: undefined }
console.log(product)

product.price = null // without price

// Output: false
console.log(!!product.price)

// Output: { price: null }
console.log(product)