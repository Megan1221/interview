/* eslint-disable import/named */

import { expect, test } from 'vitest'
import { myCreate } from './myCreate'

const person = {
  isHuman: false,
  printIntro() {
    return `My name is ${this.name}. Am I a human? ${this.isHuman}`
  },
}
test('Object.create', () => {
  const me = Object.create(person)
  me.name = 'Moozon'
  me.isHuman = true
  expect(me.printIntro()).toBe('My name is Moozon. Am I a human? true')
})

test('myCreate', () => {
  const me = myCreate(person)
  me.name = 'Moozon'
  me.isHuman = true
  expect(me.printIntro()).toBe('My name is Moozon. Am I a human? true')
})
