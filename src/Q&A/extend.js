/* eslint-disable no-console */
// 腾讯企业微信面试
// 实现继承

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function () {
  return 'hello'
}

function Student(name, age) {
  this.name = name
  this.age = age
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

const s = new Student('zz', 18)
console.log(s, s.sayHello())
