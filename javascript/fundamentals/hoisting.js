// Hosting is JavaScript's default behavior of moving declations to the top. Example:
console.log(`a = ${a}`)
var a = 2
console.log(`a = ${a}`)

// What JavaScript does is:
var a
console.log(`a = ${a}`)
var a = 2
console.log(`a = ${a}`)