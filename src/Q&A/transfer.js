/* eslint-disable no-console */
function transfer(str) {
  const legal = ['ms', 's', 'm', 'h', 'd', 'w']
  const dw = []
  const len = []
  const arr = str.split('')
  let i = 0
  let j = 0
  if (arr.length < 1)
    return -1
  for (i; i < arr.length;) {
    let cur = arr[i]
    j = i + 1
    // ms / s/ m/ h / d/ w
    if (cur && isNaN(cur)) {
      while (isNaN(arr[j]) && j < arr.length) {
        cur = cur + arr[j]
        j++
      }
      if (legal.includes(cur))
        dw.push(cur)
      else
        return -1
    }
    // 123
    else {
      const num = [cur]
      while (!isNaN(arr[j]) && j < arr.length) {
        num.push(arr[j])
        j++
      }
      len.push(Number(num.join('')))
    }
    i = j
  }
  console.log(dw, len)

  let res = 0
  while (dw.length > 0 && len.length > 0) {
    const d = dw.pop()
    const l = len.pop()
    switch (d) {
      case 'ms':
        res += l
        break
      case 's':
        res += l * 1000
        break
      case 'm':
        res += l * 1000 * 60
        break
      case 'h':
        res += l * 1000 * 60 * 60
        break
      case 'd':
        res += l * 1000 * 60 * 60 * 24
        break
      case 'w':
        res += l * 1000 * 60 * 60 * 24 * 7
        break
      default:
        return -1
    }
  }
  const remain = dw.pop()
  switch (remain) {
    case 'ms':
      res /= 1
      break
    case 's':
      res /= 1000
      break
    case 'm':
      res /= 1000 * 60
      break
    case 'h':
      res /= 1000 * 60 * 60
      break
    case 'd':
      res /= 1000 * 60 * 60 * 24
      break
    case 'w':
      res /= 1000 * 60 * 60 * 24 * 7
      break
  }
  return (Math.round(res * 1000) / 1000).toFixed(3)
}

console.log(transfer('s1h123ms'))
