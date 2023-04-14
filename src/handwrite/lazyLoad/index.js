const url1 = 'https://avatars.githubusercontent.com/u/38754558?v=4'
const url2 = 'https://aa.githubusercontent.com/u/38754558?v=4'
const url3 = 'https://avatars.githubusercontent.com/u/38754558?v=4'
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = (e) => {
      reject(e)
    }
    img.src = src
  })
}

function lazyLoad(parentId, url, triggerHeight) {
  if (scrollY + innerHeight >= triggerHeight) {
    const box = document.getElementById(parentId)
    if (!box.imgLoaded) {
      box.imgLoaded = true
      loadImg(url)
        .then((img) => {
          document.getElementById(parentId).append(img)
          console.log('appended to', parentId)
        })
        .catch((e) => {
          console.error(e)
        })
    }
  }
}
function handleScroll(e) {
  console.log(scrollY, innerHeight, scrollY + innerHeight)
  lazyLoad('img1', url1, 2000)
  lazyLoad('img2', url2, 2000)
  lazyLoad('img3', url3, 4500)
}

document.body.onscroll = throttle(handleScroll, 200)

function throttle(fn, delay) {
  let timer
  return function (...params) {
    const ctx = this
    if (!timer) {
      fn.apply(ctx, params)
      timer = setTimeout(() => {
        timer = undefined
      }, delay)
    }
  }
}
