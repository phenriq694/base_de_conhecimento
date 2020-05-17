function getRandomIntergerBetween(min, max) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let option = -1

do {
  option = getRandomIntergerBetween(-1, 11)
  console.log(`Option choosen was ${option}.`)
} while (option != -1)

console.log('End!')

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Structures Controls - Using the structure do while
 */