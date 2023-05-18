/* eslint-disable no-console */
// 先列举一下可能的情况
const tests = [
  '192.168.1.1',
  '0.0.0.0',
  '1.1.2',
  '1.300.1.1.1',
  'a.b.c.d.e',
]
tests.forEach(e => console.log(parseIp(e)))

/**
 *
 * @param {*} str 输入字符串
 * @returns Array,解析后的字符数组
 */
function parseIp(str) {
  const res = []
  const arr = str.split('.')
  if (arr.length !== 4)
    return res

  for (const e of arr) {
    const n = Number(e)
    if (!isNaN(n) && n >= 0 && n < 255) {
      if (n < 10)
        res.push(`00${n}`)

      else if (n < 100)
        res.push(`0${n}`)

      else
        res.push(`${n}`)
    }
    else {
      return []
    }
  }
  return res
}

// 面试的时候先用了 if(str.length < 7) 这种条件，虽然不会导致bug，但会让代码逻辑变得不清晰
// 如果要从长度的角度进行限制，那就想好全部的情况一起写
// 而且其实本题目已经从「split('.')」、以及「每段范围都在0～255」两个条件保证了str长度是合法的
// 所以不用单独进行if(str.length ...)的判断
