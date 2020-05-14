const number1 = 1.0
const number2 = Number('2.0')

// Output: 1 2
console.log(number1, number2)

// Output: true
console.log(Number.isInteger(number1))

// Output: true
console.log(Number.isInteger(number2))

const test1 = 9.871
const test2 = 6.871

const total = test1 * number1 + test2 * number2
const average = total / (number1 + number2)

// Output: 7.87
console.log(average.toFixed(2))

// Output: 7.8709999999999996
console.log(average.toString())

// Output: 111.11011110111110011101101100100010110100001110010101
console.log(average.toString(2)) // binary

// Output: number
console.log(typeof average)

// Output: function
console.log(typeof Number)
