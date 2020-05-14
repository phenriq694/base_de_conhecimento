// Function without return 
function printSum(a, b) {
  console.log(a + b)
}

// Output: 5
printSum(2, 3)

// Function with return
function sum(a, b = 0) {
  return a + b
}

// Output: 5
console.log(sum(2, 5))