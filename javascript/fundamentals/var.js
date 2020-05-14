// 'var' have only two types of scope: Global or function

{
  {
    {
      var canBeAccessed = 'yes'
      console.log(canBeAccessed)
    }
  }
}

console.log(canBeAccessed)

function functionScope() {
  var local = 123
  console.log(local)
}

functionScope()

// console.log(local) Cannot be accessed outside the function.

// 'var' declared in another scope, but, with the same name, it can be overwritten
var num = 1

{
  var num = 2
  // Output: 2
  console.log(`Inside = ${num}`)
}

// Output: 2
console.log(`Outside = ${num}`)