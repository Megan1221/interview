/* eslint-disable no-proto */
/**
 * Number, Boolean, String, Object, BigInt, Symbol,Null,Undefined
 * Object: Array, Map, Set....
 */
export function deepClone(target) {
  // 边界
  if (typeof target !== 'object' || target === null)
    return target
  // 处理Object
  let res
  if (Array.isArray(target)) {
    res = []
    target.forEach((value, idx) => {
      res[idx] = deepClone(value)
    })
    return res
  }
  if (target instanceof Map) {
    res = new Map()
    target.forEach((value, key) => {
      res.set(key, deepClone(value))
    })
    return res
  }
  if (target instanceof Set) {
    res = new Set()
    target.forEach((value) => {
      res.add(deepClone(value))
    })
    return res
  }
  res = new target.__proto__.constructor()
  // 遍历实例属性
  for (const i of Object.keys(target))
    res[i] = deepClone(target[i])
  return res
}

export function deepCloneJson(target) {
  return JSON.parse(JSON.stringify(target))
}

export function deepCloneByAssign(target) {
  return Object.assign({}, target)
}
