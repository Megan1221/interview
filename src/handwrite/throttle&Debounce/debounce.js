export function debounce(fn, time) {
  let timer
  return function (...params) {
    const ctx = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(ctx, params)
    }, time)
  }
}
