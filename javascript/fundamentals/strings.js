const school = "Cod3r"

// Output: r
console.log(school.charAt(4))

/*
 * Output: 
 * There is no the 5 position in the const school. 
 * But, JavaScript does not throw an error. 
 */
console.log(school.charAt(5))

// Output: 51
console.log(school.charCodeAt(3)) // Unicode value

// Output: 3
console.log(school.indexOf('4'))

// Output: od3r
console.log(school.substring(1))

// Output: Cod
console.log(school.substring(0, 3))

// Output: School Cod3r!
console.log('School '.concat(school).concat('!'))

// Output: School Cod3r!
console.log('School ' + school + '!')


// Output: Coder!
console.log(school.replace(3, 'e'))


// Output: [ 'Ana', 'Paulo', 'Pedro', 'Maria' ]
console.log('Ana,Paulo,Pedro,Maria'.split(','))