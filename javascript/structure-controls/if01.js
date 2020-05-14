function onlyGoodNews(testNote) {
  if(testNote >= 7) {
    console.log('Approved with ' + testNote)
  }
}

// Output: Approved with 8.1 
onlyGoodNews(8.1)
// Output: 
onlyGoodNews(6.1)

function ifItsTrueISpeak(value) {
  if(value) {
    console.log("It's true ... " + value)
  }
}

// Output: 
ifItsTrueISpeak()
// Output:
ifItsTrueISpeak(null)
// Output:
ifItsTrueISpeak(undefined)
// Output:
ifItsTrueISpeak(NaN)
// Output:
ifItsTrueISpeak('')
// Output:
ifItsTrueISpeak(0)
// Output: It's true ... -1
ifItsTrueISpeak(-1)
// Output: It's true ... 
ifItsTrueISpeak(' ')
// Output: It's true ... ?
ifItsTrueISpeak('?')
// Output: It's true ... 
ifItsTrueISpeak([])
// Output: It's true ... 1,2
ifItsTrueISpeak([1, 2])
// Output: It's true ... [object Object]
ifItsTrueISpeak({})

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Structures Controls - Using the structure IF #01
 */