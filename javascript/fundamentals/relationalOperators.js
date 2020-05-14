// Output: true
console.log('01)', '1' == 1) 
// Output: false
console.log('02)', '1' === 1)
// Output: false
console.log('03)', '3' != 3)
// Output: true
console.log('04)', '3' !== 3)
// Output: false
console.log('05)', 3 < 2)
// Output: true
console.log('06)', 3 > 2)
// Output: false
console.log('07)', 3 <= 2)
// Output: true
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
// Output: false
console.log('09)', d1 === d2)
// Output: false
console.log('10)', d1 == d2)
// Output: true
console.log('11)', d1.getTime() === d2.getTime())
// Output: true
console.log('12)', undefined == null)
// Output: false
console.log('13)', undefined === null)
