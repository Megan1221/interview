/* eslint-disable import/named */
/* eslint-disable unicorn/no-instanceof-array */
import { expect, test } from 'vitest'
import { myInstanceOf } from './myInstanceOf'

test('my instance of', () => {
  class Person {
    constructor(name) {
      this.name = name
    }
  }
  expect(myInstanceOf({}, Object)).toBe({} instanceof Object)
  expect(myInstanceOf([], Array)).toBe([] instanceof Array)
  expect(myInstanceOf({}, Array)).toBe({} instanceof Array)
  expect(myInstanceOf(null, Object)).toBe(null instanceof Object)
  expect(myInstanceOf(null, Person)).toBe(null instanceof Person)
  expect(myInstanceOf(undefined, Object)).toBe(undefined instanceof Object)
  expect(myInstanceOf('123', Object)).toBe('111' instanceof Object)

  const stu = new Person('xx')
  expect(myInstanceOf(stu, Person)).toBe(stu instanceof Person)
  expect(myInstanceOf({}, Person)).toBe({} instanceof Person)
})
