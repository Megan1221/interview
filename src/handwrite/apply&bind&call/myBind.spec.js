/* eslint-disable import/named */
/* eslint-disable no-extend-native */

import { expect, test } from 'vitest'
import { myBind } from './myBind'

Function.prototype.myBind = myBind
class A {
  constructor() {
    this.name = 'a'
  }

  sayName(...params) {
    return [this.name, ...params]
  }
}
class B {
  constructor() {
    this.name = 'b'
  }
}
const a = new A()
const b = new B()
const params = [1, 2, 3]
test('bind', () => {
  const bSayName = a.sayName.bind(b)
  expect(bSayName(...params)).toEqual([b.name, ...params])
})

test('myBind', () => {
  const bSayName = a.sayName.myBind(b)
  expect(bSayName(...params)).toEqual([b.name, ...params])
  const obj = {}
  obj.myBind = myBind
  expect(() => obj.myBind(b)).toThrowError(/^Type Error: must be called by a function$/)
})
