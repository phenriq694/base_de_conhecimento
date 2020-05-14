const values = [7.7, 8.9, 6.3, 9.2]

// Output: 7.7 9.2
console.log(values[0], values[3])

// Output: undefined
console.log(values[4])

values[4] = 10

// Output: [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(values)

// Output: 5
console.log(values.length)

values.push({id: 3}, false, null, 'teste')

// Output: [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste' ]
console.log(values)

// Output: [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]
console.log(values.pop())

delete values[0]

// Output: [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]
console.log(values)

// Output: object
console.log(typeof values)
