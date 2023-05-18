/* eslint-disable no-console */
// 数组去除重复的项，即[‘1’,‘2’,'1',1,‘3’]——>[‘1’,‘2’,1,‘3’]
// 这里'1'和1不同
// 注：使用原生的方式，不使用set,map

// set
function deduplication1(arr) {
  return [...new Set(arr)]
}

// map
function deduplication2(arr) {
  const res = []
  arr.reduce((pre, cur) => {
    if (!pre.has(cur)) {
      pre.set(cur, 1)
      res.push(cur)
    }
    return pre
  }, new Map())
  return res
}
// 普通写法：时间复杂度为O(n^2)
function deduplication3(arr) {
  const res = []
  for (const i of arr) {
    if (!res.includes(i))
      res.push(i)
  }
  return res
}
// 用「属性」,但是要注意key都会转换成str，所以要用type+value做key
function deduplication4(arr) {
  const res = {}
  for (const i of arr) {
    const key = typeof i + i
    if (!(key in res))
      res[key] = i
  }
  return Object.values(res)
}

const arr = ['1', '2', '1', 1, '3']
console.log(1, deduplication1(arr))
console.log(2, deduplication2(arr))
console.log(3, deduplication3(arr))
console.log(4, deduplication4(arr))
