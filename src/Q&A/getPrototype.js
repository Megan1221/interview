/* eslint-disable no-console */
// 判断引用类型的具体类型
const arr = [1, 2, 3]
// 输出arr的数据类型 Array
// Object.prototype.toString.call([1,2,3])

// eslint-disable-next-line unicorn/no-instanceof-array
console.log('instanceOf', arr instanceof Array)
console.log('isArray', Array.isArray(arr))
// constructor: 不稳定
console.log('constructor', arr.constructor)
console.log('getPrototypeOf', Object.getPrototypeOf(arr))
// 全能型
console.log('Object.prototype.call', Object.prototype.toString.call(arr))
