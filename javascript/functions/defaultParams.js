// 1
function sum1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1

  return a + b + c
}

// Output: 3
console.log(sum1())
// Output: 5
console.log(sum1(3))
// Output: 6
console.log(sum1(1, 2, 3))
// Output: 3
console.log(sum1(0, 0, 0))

// 2, 3, 4
function sum2(a, b, c) {
  a = a != undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c

  return a + b + c
}

// Output: 3
console.log(sum2())
// Output: 5
console.log(sum2(3))
// Output: 6
console.log(sum2(1, 2, 3))
// Output: 0
console.log(sum2(0, 0, 0))


// ES2015
function sum(a = 1, b = 1, c = 1) {
  return a + b + c
}

// Output: 3
console.log(sum())
// Output: 5
console.log(sum(3))
// Output: 6
console.log(sum(1, 2, 3))
// Output: 0
console.log(sum(0, 0, 0))

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Function - Default Params
 */