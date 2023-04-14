export function myApply(ctx, params) {
  const caller = this
  if (typeof caller !== 'function')
    throw new Error('Type Error: must be called by a function')
  const s = Symbol('function')
  ctx[s] = caller
  const res = ctx[s](...params)
  delete ctx[s]
  return res
}
