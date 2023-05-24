/* eslint-disable no-console */
import mySetTimeout from '../mySetTimeout.js'
import mySetInterval from './mySetInterval.js'

window.mySetInterval = mySetInterval
window.mySetTimeout = mySetTimeout

let cnt = 1
function print() {
  console.log(++cnt)
}
// const clearT = window.mySetTimeout(print, 3000)
// window.mySetTimeout(clearT, 2000)

const clearI = mySetInterval(print, 1000)
mySetTimeout(clearI, 5500)
