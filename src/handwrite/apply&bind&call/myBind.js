/* eslint-disable no-console */
// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
export function myBind(ctx) {
  const fn = this
  if (typeof fn !== 'function')
    throw new Error('Type Error: must be called by a function')
  return function (...params) {
    return fn.apply(ctx, params)
  }
}
// eslint-disable-next-line no-extend-native
Function.prototype.myBind = myBind

function fn(x) {
  console.log(this.name, x)
}

const newFn = fn.myBind({ name: 'a' })
newFn(1)
