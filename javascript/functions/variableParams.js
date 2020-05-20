function sum() {
  let sum = 0
  for (i in arguments) {
    sum += arguments[i]
  }

  return sum
}

// Output: 0
console.log(sum())
// Output: 2
console.log(sum(2))
// Output: 4
console.log(sum(2, 2))
// Output: 20
console.log(sum(2, 3, 4, 5, 6))
// Output: 6Test
console.log(sum(1, 2, 3, 'Test'))
// Output: 0abc
console.log(sum('a', 'b', 'c'))

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Function - Variable Params
 */