/* eslint-disable no-console */
export default function mySetTimeout(fn, delay) {
  const timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, delay)
  return function () {
    clearInterval(timer)
  }
}
