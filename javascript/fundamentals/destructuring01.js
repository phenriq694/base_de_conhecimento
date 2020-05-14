const client = {
  name: 'Paulo',
  age: 25,
  address: {
    street: '123', 
    number: 123
  }
}

const { name, age } = client
// Output: Paulo 25
console.log(name, age)

const { name: n, age: a } = client
// Output: Paulo 25
console.log(n, a)

const { lastName, goodClient = true } = client 
// Output: undefined true
console.log(lastName, goodClient)

const { address: { street, number, cep } } = client 
// Output: 123 123 undefined
console.log(street, number, cep)