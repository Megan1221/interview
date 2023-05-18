// 支持过期时间的localStorage 
function initLocalStorage(){
  localStorage.setItem = function (key, value, time) {
    const expiresTime = Date.now() + time * 1000
    const obj = {
      __data: value,
      __expires: expiresTime
    }
    Storage.prototype.setItem.call(localStorage, key, JSON.stringify(obj))
  };

  localStorage.getItem = function (key) {
    const value = Storage.prototype.getItem.call(localStorage, key)
    if (typeof value === 'string') {
      const obj = JSON.parse(value)
      if (obj.__expires) {
        if (obj.__expires >= Date.now()) {
          return obj.__data
        } else {
          return null
        }
      }
    } 
    return value
  }
}
// 注意兼容普通（未设置过期时间）的情况