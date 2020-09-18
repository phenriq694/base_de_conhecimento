let compareWithThis = function (param) {
  console.log(this === param)
}

// Output: true
compareWithThis(global)

const obj = {}
compareWithThis = compareWithThis.bind(obj)
// Output: true
compareWithThis(obj)
// Output: false
compareWithThis(global)

let compareWithThisArrow = (param) => console.log(this === param)
// Output: false
compareWithThisArrow(global)
// Output: true
compareWithThisArrow(module.exports)

compareWithThisArrow = compareWithThisArrow.bind(obj)
// Output: false
compareWithThisArrow(obj)
// Output: true
compareWithThisArrow(module.exports)


