// literal 
function func1() {}

// Assing to a variable 
const func2 = function () {}

// Assing to an array
const array = [function (a, b) { return a + b }, func1, func2]

// Output: 5
console.log(array[0](3, 2))

// Assing in attribure of an object
const obj = {}
obj.speak = function () { return 'Hi!' }

// Output: Hi!
console.log(obj.speak())

// Pass as params
function run (func) {
  func()
}

// Output: Running ...
run(function () { console.log('Running ...')})

// Return a function
function sum(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

// Output: 9
sum(4, 3)(2)

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Function - First Class Citizen
 */