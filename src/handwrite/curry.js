/* eslint-disable no-console */
const curry = (fn) => {
  const length = fn.length
  const curriedFun = (...args) => {
    if (args.length >= length) {
      return fn(...args)
    }
    else {
      return (...args2) => {
        return curriedFun(...args.concat(args2))
      }
    }
  }
  return curriedFun
}

const fun = (a, b, c) => {
  return [a, b, c]
}

const curriedFun = curry(fun)
console.log(curriedFun(1)(2)(3)) // [1, 2, 3]
console.log(curriedFun(1, 2)(3)) // [1, 2, 3]
console.log(curriedFun(1, 2, 3)) // [1, 2, 3]
