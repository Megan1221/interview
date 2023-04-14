export function throttle(fn, time) {
  let timer
  return function (...args) {
    const ctx = this
    if (!timer) {
      fn.apply(ctx, args)
      timer = setTimeout(() => {
        timer = undefined
      }, time)
    }
  }
}
