/* eslint-disable no-console */
function getPic() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    window.xhr = xhr
    // 得到二进制的“原始数据”
    xhr.responseType = 'blob'
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // type? responseText/html/?
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log('response:', xhr.responseURL)
          resolve(xhr.responseURL)
        }
        else { reject(new Error(xhr.statusText)) }
      }
    }
    xhr.open('GET', './pic.jpeg')
    xhr.send()
  })
}

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  getPic().then((res) => {
    const img = document.createElement('img')
    img.src = res
    // img.src = URL.createObjectURL(res)
    // 直接在内存创建该图片资源的引用地址
    // blob:http://127.0.0.1:5500/2a999253-7c82-4559-a32f-b8d7bce1cf4c
    img.alt = 'pic.jpeg'
    const parent = document.querySelector('#box')
    parent.appendChild(img)
  })
})
