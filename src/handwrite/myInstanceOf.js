/* eslint-disable no-console */
/* eslint-disable no-proto */
export function myInstanceOf(child, ancestor) {
  if (typeof child !== 'object' || typeof ancestor !== 'function')
    return false
  while (child !== null) {
    if (child.__proto__ === ancestor.prototype)
      return true
    else
      child = child.__proto__
  }
  return false
}
