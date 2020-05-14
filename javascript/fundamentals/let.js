// 'let' have three types of scope: Global, function and block

let num = 1

{ 
  let num = 2
  console.log(`Inside = ${num}`)
}
console.log(`Outsie = ${num}`)