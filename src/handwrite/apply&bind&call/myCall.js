export function myCall(ctx, ...args) {
  const fn = this
  if (typeof fn !== 'function')
    throw new Error('Type Error: must be called by a function')
  const s = Symbol(fn.name)
  ctx[s] = fn
  const res = ctx[s](...args)
  delete ctx[s]
  return res
}
