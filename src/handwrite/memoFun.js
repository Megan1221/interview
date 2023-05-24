/* eslint-disable no-console */
const fibonacci = (x) => {
  if (x === 1 || x === 2)
    return x

  else
    return fibonacci(x - 1) + fibonacci(x - 2)
}

const memo = (fn, hasher) => {
  const memoFun = function (...args) {
    const key = hasher ? hasher.apply(this, args) : args.join('')
    if (!memoFun.cache.get(key)) {
      const res = fn.apply(this, args)
      memoFun.cache.set(key, res)
    }
    return memoFun.cache.get(key)
  }
  memoFun.cache = new Map()
  return memoFun
}

const memoFibonacci = memo(fibonacci)

// 然后看下效果
let startTime = new Date().getTime()
memoFibonacci(40)
let needTime = new Date().getTime() - startTime

console.log(needTime) // 第一次运行时间:1055毫秒

// 再调一次
startTime = new Date().getTime()
memoFibonacci(40)
needTime = new Date().getTime() - startTime

console.log(needTime) // 时间直接变为0了，直接取缓存，快到1毫秒都不要
