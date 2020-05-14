// Name / Value pair
const greeting = 'Hello' // Lexic context 1

function exec() {
  const greeting = 'Hi' // Lexic context 2
  return greeting
}

// Objects are nested groups of name / value pairs
const Client = {
  name: 'Paulo',
  age: '25',
  weight: 50.78,
  address: {
    street: '123',
    number: 123
  }
}

console.log(greeting)
console.log(exec())
console.log(Client)