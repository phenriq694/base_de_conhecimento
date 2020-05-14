// Assingning a function to a variable
const printSum = function (a, b) {
  console.log(a + b)
}

// Output: 5
printSum(2, 3)

// Assingning an arrow function to a variable
const sum = (a, b) => {
  return a + b
}

// Output: 9
console.log(sum(2, 7))

// implicit return
const subtraction = (a, b) => a - b

// Output: -1
console.log(subtraction(2, 3))