const  printResult = function(testNote) {
  if (testNote >= 7) {
    console.log('Approved!')
  } else {
    console.log('Disapproved!')
  }
}

// Output: Approved!
printResult(10)
// Output: Disapproved!
printResult(4)
// Output: Disapproved!
printResult('Hi!')

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Structures Controls - Using the structure IF/ELSE
 */