const product1 = {}
product1.name = 'iPhone Apple'
product1.price = 6000
product1['Screen Width'] = 6.7 // Avoid attributes with space

// Output: { nome: 'iPhone Apple', preco: 6000, 'Screnn Width': 6.7 }
console.log(product1)

const product2 = {
  name: 'Notebook',
  price: 7900.90
}

// Output: { name: 'Notebook', price: 7900.9 }
console.log(product2)