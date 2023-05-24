/* eslint-disable no-console */
const hashBtn = document.getElementById('hashBtn')
const historyBtn = document.getElementById('historyBtn')
hashBtn.addEventListener('click', () => {
  window.location.hash = 'p1'
})
historyBtn.addEventListener('click', () => {
  history.pushState({ str: 'hello test' }, '', '/src/browser/router/test.html')
  // window.history.go(0)
})

const p1 = document.createElement('p')
p1.innerText = 'This is p1'
const parent = document.getElementById('container')
window.addEventListener('hashchange', (e) => {
  console.log('hashchange', e.oldURL, e.newURL)
  if (window.location.hash === '#p1')
    parent.appendChild(p1)
})

window.addEventListener('popstate', (e) => {
  console.log('index-popstate:', JSON.stringify(e.state), history.state, history.length)
})
