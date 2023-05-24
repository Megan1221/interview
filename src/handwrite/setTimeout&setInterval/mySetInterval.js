export default function mySetInterval(fn, delay) {
  let timer
  function interval() {
    timer = setTimeout(() => {
      fn()
      interval()
    }, delay)
  }
  interval()
  return function () {
    clearTimeout(timer)
  }
}
