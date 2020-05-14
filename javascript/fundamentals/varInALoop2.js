const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(() => console.log(i))
}

// The outputs will be '10', because var is global in scope
funcs[2]()
funcs[8]()