export function myBind(ctx) {
  const fn = this
  if (typeof fn !== 'function')
    throw new Error('Type Error: must be called by a function')
  return function (...params) {
    return fn.apply(ctx, params)
  }
}
