/* eslint-disable no-console */
function Life(flag) {
  this.flag = flag
};
function Person(name) {
  this.name = name
}
const person1 = new Person('person 1')
// 继承
Person.prototype = new Life('human')
Person.prototype.constructor = Person
const person2 = new Person('person 2')
console.log(person1, '=====>constructor:', person1.constructor)
console.log(Person.prototype, '=====>constructor:', Person.prototype.constructor)
console.log(person2, '=====>constructor:', person2.constructor)

// 任何函数只要使用new操作符调用就是构造函数
// 不加new调用普通构造函数时，this始终会指向Global对象（window）
// 不加new使用类构造函数会抛出错误
Person('test') // window.name = 'test'
