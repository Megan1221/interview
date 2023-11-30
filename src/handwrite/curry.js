/* eslint-disable no-console */
// const curry = (fn) => {
//   const length = fn.length
//   const curriedFun = (...args) => {
//     if (args.length >= length) {
//       return fn(...args)
//     }
//     else {
//       return (...args2) => {
//         return curriedFun(...args.concat(args2))
//       }
//     }
//   }
//   return curriedFun
// }

const fun = (a, b, c) => {
  // return [a, b, c]
  console.log(a, b, c)
}

// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

// 对于已经柯里化后的 _fn 函数来说，
// 当接收的参数数量与原函数的形参数量相同时，执行原函数
// 当接收的参数数量小于原函数的形参数量时，返回一个函数用于接收剩余的参数，
// 直至接收的参数数量与形参数量一致，执行原函数。

function curry(fn) {
  const len = fn.length
  return function curriedFun(...args) {
    const ctx = this
    if (args.length >= len) {
      return fn.apply(ctx, args)
    }
    else {
      return function _fn(...params) {
        return curriedFun.apply(ctx, [...args, ...params])
      }
    }
  }
}

const _fun = curry(fun)
console.log(fun.length)
_fun(1)(2)(3)
_fun(1, 2)(3)
_fun(1, 2, 3)
