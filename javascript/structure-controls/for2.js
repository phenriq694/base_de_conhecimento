const testNotes = [6.7, 7.4, 9.8, 8.1, 7.7]

/**
 * Output:
 * Test Note = 6.7
 * Test Note = 7.4
 * Test Note = 9.8
 * Test Note = 8.1
 * Test Note = 7.7
 */
for(let i in testNotes) {
  console.log(`Test Note = ${testNotes[i]}`)
}

const client = {
  name: 'Paulo Henrique',
  lastName: 'Lima',
  age: '25',
}

/**
 * Output:
 * name = Paulo Henrique
 * lastName = Lima
 * age = 25
 */
for(let attribute in client) {
  console.log(`${attribute} = ${client[attribute]}`)
}

/**
 * Source:
 * Coder - Modern Development Cource - Section 4: Javascript: Structures Controls - Using the structure do for/in
 */