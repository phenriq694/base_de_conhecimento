isActive = true

// Output: true
console.log(isActive)

isActive = 1

// Output: true
console.log(!!isActive)

console.log('True...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'text')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('False...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

// Output: true
console.log(!!('' || null || 0 || ' '))

let name = ''

// Output: Unknow
console.log(name || 'Unknow')