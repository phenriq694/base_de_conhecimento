function getRandomIntergerBetween(min, max) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let option = 0

while (option != 10) {
  option = getRandomIntergerBetween(-1, 11)
  console.log(`Option choosen was ${option}.`)
}

console.log('End!')

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Structures Controls - Using the structure while
 */