Number.prototype.between = function (begin, end) {
  return this >= begin && this <= end
}

const printResult = function (testNote) {
  if (testNote.between(9, 10)) {
    console.log('Honored!')
  } else if (testNote.between(7, 8.99)) {
    console.log('Approved!')
  } else if (testNote.between(4, 6.99)) {
    console.log('Recuperation!')
  } else if (testNote.between(0, 3.99)) {
    console.log('Disapproved!')
  } else {
    console.log('Invalid Note!')
  }
}

// Output: Honored!
printResult(10)
// Output: Approved!
printResult(8.9)
// Output: Recuperation!
printResult(6.55)
// Output: Disapproved!
printResult(2.3)
// Output: Invalid Note!
printResult(-1)
// Output: Invalid Note!
printResult(11)

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Structures Controls - Using the structure IF/ELSE IF
 */