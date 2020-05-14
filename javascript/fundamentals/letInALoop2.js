const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(() => console.log(i))
}

/*
 * The outputs will be '2' and '8', because the variable with let is points to the value 
 * when the function was executed and stored in the array.
 */
funcs[2]()
funcs[8]()