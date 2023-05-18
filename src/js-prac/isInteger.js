// 判断是否为整数

// 取余运算符
function isInteger1(n) {
  // 空字符串、字符串类型数字、布尔true、空数组 % 1 === 0 ，所以要先判断是否为number
  return typeof n === 'number' && (n % 1 === 0)
}
console.log(isInteger1(2))
console.log(isInteger1(true))
console.log(isInteger1(3.33333))

// Math
function isInteger2(n) {
  // 整数取整后还是等于自己
  return Math.floor(n) === n
}
console.log(isInteger2(2))
console.log(isInteger2(true))
console.log(isInteger2(3.33333))

// parseInt
function isInteger3(n) {
  // console.log(parseInt(n, 10))
  // parseInt | parseFloat 只有在String上调用才正确运行，其他返回的都是NaN
  // 最好指定基数（第二个参数）
  return parseInt(n, 10) === n
}
console.log(isInteger3(2))
console.log(isInteger3(true))
console.log(isInteger3(3.33333))

// ES6提供了Number.isInteger
console.log(Number.isInteger(3)) // true
console.log(Number.isInteger(3.1)) // false
console.log(Number.isInteger('')) // false
console.log(Number.isInteger('3')) // false
console.log(Number.isInteger(true)) // false
console.log(Number.isInteger([])) // false

