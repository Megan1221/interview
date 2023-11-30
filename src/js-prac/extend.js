/* eslint-disable no-proto */
/* eslint-disable no-console */
function Parent(age) {
  this.age = age
}

Parent.prototype.say = () => {
  console.log('hi')
}

// function Child(name) {
//   this.name = name
// }

function Child(name, age) {
  Parent.call(this, age)
  this.name = name
}
// no.1
Child.prototype.__proto__ = Parent.prototype

// no.2
// Child.prototype = new Parent()
// Child.prototype.learn = () => {
//   console.log('learn')
// }
// Child.prototype.constructor = Child

// no.3
Child.prototype = Object.create(Parent.prototype)
Child.prototype.learn = () => {
  console.log('learn')
}
Child.prototype.constructor = Child
const obj = new Child('z', 20)
obj.say()
