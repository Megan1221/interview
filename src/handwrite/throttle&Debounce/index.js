/* eslint-disable no-console */
import { debounce } from './debounce.js'
import { throttle } from './throttle.js'
function handleClick(e) {
  console.log(e)
}

const btns = document.getElementsByTagName('button')
const time = 1000
// btns[0].addEventListener('click', debounce(handleClick, time))
// btns[1].addEventListener('click', throttle(handleClick, time))

const t = throttle(handleClick, time)
const d = debounce(handleClick, time)

btns[0].addEventListener('click', t)
btns[1].addEventListener('click', d)
