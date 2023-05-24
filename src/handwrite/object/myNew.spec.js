/* eslint-disable import/named */

import { expect, test } from 'vitest'
import { myNew } from './myNew'

test('myNew-Array', () => {
  // eslint-disable-next-line no-array-constructor
  expect(myNew(Array, 1, 2, 3, 4)).toEqual(new Array(1, 2, 3, 4))
})
test('myNew-Object', () => {
  function F(name, age) {
    return { name, age }
  }
  expect(myNew(F, 'zz', 18)).toEqual(new F('zz', 18))
})
test('myNew-constructor', () => {
  function C(name, age) {
    this.name = name
    this.age = age
  }
  expect(myNew(C, 'zz', 18)).toEqual(new C('zz', 18))
})

test('myNew-type', () => {
  // expect(myNew({})).toThrowError(/^Type Error$/)
  expect(myNew(Error, 'Type Error')).toEqual(new Error('Type Error'))
})
