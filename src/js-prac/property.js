/* eslint-disable no-prototype-builtins */
/* eslint-disable no-console */
function Person() {}
// 原型属性
Person.prototype.alive = true
Person.prototype.age = 0
// 实例属性
const amy = new Person()
amy.name = 'amy'
amy.age = 18

console.log(amy.alive, '=true') // true
console.log(amy.age, '=18') // 18
delete amy.age
console.log(amy.age, '=0') // 0
amy.age = 18 // 恢复

// in操作符：实例属性+原型属性
console.log('alive' in amy, '=true') // true 原型属性
console.log('name' in amy, '=true') // true 实例属性
console.log('address' in amy, '=false') // false
// hasOwnProperty 实例属性
console.log(amy.hasOwnProperty('name'), '=true') // true
console.log(amy.hasOwnProperty('alive'), '=false') // false
// 实例属性
console.log(Object.keys(amy)) // ['name', 'age']
console.log(Object.getOwnPropertyNames(amy)) // ['name', 'age']
console.log(Object.values(amy)) // [ 'amy', 18 ]
console.log(Object.entries(amy))// [ [ 'name', 'amy' ], [ 'age', 18 ] ]
