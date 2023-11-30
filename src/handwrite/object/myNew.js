export function myNew(fn, ...args) {
  if (typeof fn !== 'function')
    throw new Error ('Type Error')
  // const obj = {}
  // 衔接原型链
  const obj = Object.create(fn.prototype)
  // 执行构造函数
  const res = fn.apply(obj, args)
  // 若构造函数返回了对象，则返回这个对象，否则返回obj
  if (res && (typeof res === 'object' || typeof res === 'function'))
    return res
  else
    return obj
}
