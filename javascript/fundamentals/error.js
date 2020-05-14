function handleErrors(err) {
  // throw new Error('...')
  // throw 10
  // throw true
  // 'message'
  throw {
    name: err.name,
    msg: err.message,
    date: new Date
  }
}

function printNameInUppecase(obj) {
  try {
    console.log(obj.name.toUpperCase())
  } catch (e) {
    handleErrors(e)
  } finally {
    console.log('End')
  }
}

const obj = { nome: 'Paulo' }
printNameInUppecase(obj)