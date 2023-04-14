/* eslint-disable no-console */
const form = document.querySelector('form')
const submit = document.querySelector('input[type=submit]')

if (document.cookie) {
  const cookie = getCookie()
  form.username.value = cookie.username
  form.password.value = cookie.password
  form.remember.checked = true
}

submit.addEventListener('click', (e) => {
  // submit被点击时默认会刷新页面（发请求）
  e.preventDefault()
  const username = form.username.value
  const password = form.password.value
  const remember = form.remember.checked
  if (remember) {
    const day = 24 * 60 * 60
    // cookie需要逐个设置
    setCookie('username', username)
    setCookie('password', password, day)
  }
})

function setCookie(key, value, maxAge) {
  value = encodeURIComponent(value)
  let cookie = `${key}=${value}`
  if (maxAge && !isNaN(Number(maxAge)))
    cookie += `; max-age=${maxAge}`
  // 没有设置max-age时默认为session
  document.cookie = cookie
}

function getCookie() {
  const res = {}
  document.cookie.split(';').map(entry => entry.split('=')).forEach((arr) => {
    const [key, value] = arr
    res[key] = value
  })
  console.log('current cookies: ', res)
  return res
}
