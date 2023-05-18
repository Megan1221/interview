/* eslint-disable no-prototype-builtins */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
function Person(name) {
  this.name = name
}
Person.prototype.age = 18
const p = new Person('lily')
// for..in遍历(实例、继承属性)
for (const key in p)
  console.log(key)
// 只打印实例属性
for (const key in p)
  p.hasOwnProperty(key) && console.log(key)
// Object.keys方法（实例属性）
Object.keys(p).map((key) => {
  console.log(key)
})
// Object.getOwnPropertyNames方法（实例属性）
Object.getOwnPropertyNames(p).map((name) => {
  console.log(name)
})
