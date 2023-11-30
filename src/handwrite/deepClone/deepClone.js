/* eslint-disable no-proto */
/**
 * Number, Boolean, String, Object, BigInt, Symbol,Null,Undefined
 * Object: Array, Map, Set....
 */
export function deepClone(target) {
  // 基本类型
  if (typeof target !== 'object' || target === null)
    return target
  // 处理引用类型
  let res
  // 集合
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
  // 函数
  if (target instanceof Function) {
    if (target.prototype) {
      // 有prototype就是普通函数
      res = function (...args) {
        return target.apply(this, args)
      }
    }
    else {
      res = (...args) => target(...args)
    }
    return res
  }
  // Date
  if (target instanceof Date)
    return new Date(target - 0)
  // Reg
  if (target instanceof RegExp)
    return new RegExp(target.source, target.flags)

  res = new target.__proto__.constructor()
  // 遍历实例属性
  for (const i of Reflect.ownKeys(target))
    res[i] = deepClone(target[i])
  return res
}

export function deepCloneJson(target) {
  return JSON.parse(JSON.stringify(target))
}

export function deepCloneByAssign(target) {
  return Object.assign({}, target)
}

// Reflect.ownKeys会返回对象的所有自有属性，包括Symbol属性和不可枚举属性，但是不包括继承属性。
