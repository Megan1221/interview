/* eslint-disable no-console */
/**
 * @param {*} url 'http://sample.com/?a=1&b=2&c=xx&d=#hash'
 * @returns: result = { a: '1', b: '2', c: 'xx', d: '' }
 */

function getQueryFromString(url) {
  const res = {}
  const hashIdx = url.lastIndexOf('#')
  if (hashIdx !== -1)
    url = url.slice(0, hashIdx)
  const [, query] = url.split('?')
  if (query) {
    query.split('&').map(str => str.split('=')).reduce((pre, cur, idx, arr) => {
      pre[cur[0]] = decodeURIComponent(cur[1])
      return pre
    }, res)
  }
  return res
}
const urlList = [
  'http://sample.com/?a=1&b=2&c=xx&d=#hash',
  'https://github.com/sisterAn/JavaScript-Algorithms/issues/64',
  'https://www.google.com/search?q=js%E7%BC%96%E7%A8%8B+%E6%8B%86%E5%88%86URL&sourceid=chrome&ie=UTF-8',
]
urlList.forEach((e) => {
  console.log(getQueryFromString(e))
})

function getQueryFromTag() {
  const res = []
  const nodes = Array.from(document.getElementsByTagName('a'))
  nodes.forEach((a) => {
    res.push(getQueryFromString(a.href))
  })
  return res
}
window.getQueryFromTag = getQueryFromTag
