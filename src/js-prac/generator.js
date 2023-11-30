/* eslint-disable no-console */
function* gen() {
  yield '一只没有耳朵'
  yield '一只没有尾巴'
  return '真奇怪'
}

const iterator = gen()
console.log(iterator.next()) // 第一次next，返回第一个yield后面的值
console.log(iterator.next()) // 第二次next，返回第二个yield后面的值
console.log(iterator.next())
