export function myNew(fn, ...args) {
  if (typeof fn !== 'function')
    throw new Error ('Type Error')
  // const obj = {}
  const obj = Object.create(fn.prototype)
  const res = fn.apply(obj, args)
  if (res && (typeof res === 'object' || typeof res === 'function'))
    return res
  else
    return obj
}
