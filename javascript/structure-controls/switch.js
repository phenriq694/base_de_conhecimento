const printResult = function (testNote) {
  switch (Math.floor(testNote)) {
    case 10:
    case 9:
      console.log('Honored!')
      break;
    case 8: case 7:
      console.log('Approved!')
      break;
    case 6: case 5: case 4:
      console.log('Recuperation!')
      break;    
    case 3: case 2: case 1: case 0:
      console.log('Disapproved!')
      break;
    default:
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
 * Coder - Modern Development Cource - Section 4: Javascript: Structures Controls - Using the structure Switch
 */