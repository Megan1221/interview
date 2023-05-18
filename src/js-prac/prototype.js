/* eslint-disable no-prototype-builtins */
/* eslint-disable no-console */
/**
 * 先有构造函数，后有prototype：
 * - 每个函数都会有自己的prototype属性
 * - 只要创建一个函数，就会按照特定的规则为其创建一个原型对象，作为该函数prototype属性的值
 * - 默认情况下，该原型对象只有一个constructor属性，指向构造函数
 */

function Person(name) {
  this.name = name
}
console.log(typeof Person.prototype)
console.log('Person.prototype :>> ', Person.prototype)
// {constructor: f Person(name), __proto__: Object}

/**
 * 原型关系
 */
function Student() {
  this.sayName = function () {
    console.log(this.name)
  }
}
Student.prototype = new Person('z')
const s = new Student()
console.log('s :>> ', s)
// instanceOf操作符
console.log('s instance Person:', s instanceof Person)
// isProtoTypeOf()
console.log(Person.prototype.isPrototypeOf(s))
// getPrototypeOf()
console.log(Object.getPrototypeOf(s))
