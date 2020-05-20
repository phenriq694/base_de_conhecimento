function area(height, width) {
  const area = height * width
  if (area > 20) {
    console.log(`Value above allowed: ${area}m2.`)
  } else {
    return area
  }
}

// Output: 4
console.log(area(2, 2))
// Output: NaN
console.log(area(2))
// Output: NaN
console.log(area())
// Output: 6
console.log(area(2, 3, 4, 5, 6))
// Output: Value above allowed: 25m2.
// Output: undefined
console.log(area(5, 5))

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Function - Params and Returns are optinal
 */