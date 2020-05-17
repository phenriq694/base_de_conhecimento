const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * Output:
 * 0 = 1
 * 1 = 2
 * 2 = 3
 * 3 = 4
 * 4 = 5
 */
for (let x in nums) {
  if (x == 5) {
    break
  }

  console.log(`${x} = ${nums[x]}`)
}

/**
 * Output:
 * 0 = 1
 * 1 = 2
 * 2 = 3
 * 3 = 4
 * 4 = 5 
 * 6 = 7
 * 7 = 8
 * 8 = 9
 * 9 = 10
 */
for (let y in nums) {
  if (y == 5) {
    continue
  }

  console.log(`${y} = ${nums[y]}`)
}


external: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break external
    console.log(`Par = ${a}, ${b}`)
  }
}
/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Structures Controls - Using the structure do for/in
 */