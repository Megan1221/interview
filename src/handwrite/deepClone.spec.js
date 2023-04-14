/* eslint-disable import/named */
import { expect, test } from 'vitest'
import { deepClone, deepCloneByAssign, deepCloneJson } from './deepClone'

/**
 * Number
 * String
 * Boolean
 * Null
 * Undefined
 * Object
 * BigInt
 * Symbol
 */

test('deepClone', () => {
  let target
  // eslint-disable-next-line prefer-const
  target = {
    n: 123,
    s: 'abc',
    b: false,
    o1: null,
    o2: {
      n: 456,
      s: 'def',
      b: true,
      o1: null,
      u: undefined,
      bi: BigInt('20000000000'),
      sb: Symbol(2),
    },
    u: undefined,
    bi: BigInt('10000000000'),
    sb: Symbol(1),
    arr: [1, 2, 3],
    map: new Map([['a', 1], [target, 2]]),
    set: new Set([1, 2, 3]),
  }

  function Person(name) {
    this.name = name
  }
  Person.prototype.age = 18
  const p = new Person('zz')
  expect(deepClone(target)).toEqual(target)
  expect(deepClone(target)).toStrictEqual(target)
  expect(deepClone(p)).toStrictEqual(p)
})

test('deepCloneJson', () => {
  let target
  // eslint-disable-next-line prefer-const
  target = {
    n: 123,
    s: 'abc',
    b: false,
    o1: null,
    o2: {
      n: 456,
      s: 'def',
      b: true,
      o1: null,
      // u: undefined,
      // bi: BigInt('20000000000'),
      // sb: Symbol(2),
    },
    // test() {},
    // u: undefined,
    // bi: BigInt('10000000000'),
    // sb: Symbol(1),
    arr: [1, 2, 3],
    // map: new Map([['a', 1], [target, 2]]),
    // set: new Set([1, 2, 3]),
  }
  expect(deepCloneJson(target)).toEqual(target)
})

test('deepCloneByAssign', () => {
  let target
  // eslint-disable-next-line prefer-const
  target = {
    n: 123,
    s: 'abc',
    b: false,
    o1: null,
    o2: {
      n: 456,
      s: 'def',
      b: true,
      o1: null,
      u: undefined,
      bi: BigInt('20000000000'),
      sb: Symbol(2),
    },
    u: undefined,
    bi: BigInt('10000000000'),
    sb: Symbol(1),
    arr: [1, 2, 3],
    map: new Map([['a', 1], [target, 2]]),
    set: new Set([1, 2, 3]),
  }
  expect(deepCloneByAssign(target)).toEqual(target)
})
