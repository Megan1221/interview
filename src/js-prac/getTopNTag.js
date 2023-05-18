function getTopNTags(n) {
  // 注意：NodeList是类数组元素，不是数组，不能直接用map
  const allTags = Array.from(document.querySelectorAll('*')).map(node => node.nodeName)
  // console.log(allTags)
  const tagCounts = Array.from(
    allTags.reduce((preRes, cur) => {
      return preRes.set(cur, (preRes.get(cur) || 0) + 1)
    }, new Map())
  )
  console.log(tagCounts)
  return tagCounts.sort((a,b) => [b[1] - a[1]]).slice(0,n)
}
getTopNTags(3)
