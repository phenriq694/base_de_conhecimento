function test1(num) {
  if(num > 7)
    console.log(num)
  
  console.log('Final')
}

// Output: Final
test1(6)
/* Output: 
 * 8
 * Final
*/
test1(8)

function test2(num) {
  if(num > 7); {
    console.log(num)
  }
}

// Output: 6
test2(6)
// Output: 8
test2(8)

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Structures Controls - Using the structure IF #02
 */