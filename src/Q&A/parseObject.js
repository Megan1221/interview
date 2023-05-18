/* eslint-disable no-console */
// 实现parse
const object = {
  b: { c: 4 }, d: [{ e: 5 }, { e: 6 }],

}

console.assert(parse(object, 'b.c') === 4, 'error') // true
console.assert(parse(object, 'd[0].e') === 5, 'error') // true
console.assert(parse(object, 'd.0.e') === 5, 'error') // true
console.assert(parse(object, 'd[1].e') === 6, 'error') // true
console.assert(parse(object, 'd.1.e') === 6, 'error') // true
console.assert(parse(object, 'f') === 'undefined', 'error') // true

function parse(obj, str) {
  if (!obj || typeof obj !== 'object')
    return obj
  const chain = str.split('.')
  const res = chain.reduce((pre, cur) => {
    const idx = cur.indexOf('[')
    // eslint-disable-next-line max-statements-per-line
    if (idx === -1) { return pre[cur] }
    else {
      const [arr, i] = [cur.substring(0, idx), cur.substring(idx + 1, cur.indexOf(']'))]
      return pre[arr][i]
    }
  }, obj)
  return res || 'undefined'
}
