/* eslint-disable no-console */
class Person {
  // 实例属性通过constructor传入
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // 原型方法
  locate() {
    console.log('prototype', this)
    // prototype Person { name: 'z', age: 20 }
  }

  // 静态方法,定义在类上
  static locate() {
    console.log('class', this)
    // class [class Person]
  }
}

const p = new Person('z', 20)
console.log(p)
p.locate()
Person.locate()
