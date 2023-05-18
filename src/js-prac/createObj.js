/* eslint-disable no-console */
// 对象字面量
const person1 = {
  name: 'a',
  age: 1,
  sayName() {
    console.log(this.name)
  },
}
console.log('person1 :>> ', person1)

// 工厂模式
function createPerson(name, age) {
  // eslint-disable-next-line no-new-object
  const obj = new Object()
  obj.name = name
  obj.age = age
  obj.sayName = function () {
    console.log(name)
  }
  return obj
}
const person2 = createPerson('b', 2)
console.log('person2 :>> ', person2)

// 构造函数模式
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    console.log(this.name)
  }
}
const person3 = new Person('c', 3)
console.log('person3 :>> ', person3)
