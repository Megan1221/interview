// let timer
// let count
// let prevLabel

// function run(label) {
//   if (label === prevLabel) {
//     count++
//     clearTimeout(timer)
//   }
//   else {
//     count = 1
//     prevLabel = label
//   }
//   const tmpCount = count
//   timer = setTimeout(() => {
//     console.log(label, tmpCount)
//     prevLabel = undefined
//   }, 1000)
// }

function runFactory(consoleFun) {
  let timer
  let count
  let prevLabel
  return function (label) {
    const ctx = this
    if (label === prevLabel) {
      count++
      clearTimeout(timer)
    }
    else {
      count = 1
      prevLabel = label
    }
    const tmpCount = count
    timer = setTimeout(() => {
      consoleFun.call(ctx, label, tmpCount)
      prevLabel = undefined
    }, 1000)
  }
}

// ;(function () {
//   run('a')
//   run('a')
//   run('a')
//   // run('b')
//   // run('b')
//   // run('c')
//   setTimeout(() => {
//     run('a')
//     run('a')
//     run('a')
//     run('b')
//     run('b')
//     run('c')
//   }, 2000)
// })()

const run = runFactory(console.log)
; (function () {
  run('a')
  run('a')
  run('a')
  // run('b')
  // run('b')
  // run('c')
  setTimeout(() => {
    run('a')
    run('a')
    run('a')
    run('b')
    run('b')
    run('c')
  }, 2000)
})()


const debouncedFn1 = runFactory(fn1)
const debouncedFn2 = runFactory(fn2)

sendLabel(data)
sendLabels(datas: Array<data>)
data: {
  label: String,
  value: Number,
}

sendLog(data)
data: {
  logType: String,
    value: String,
    
}

reportLabel(type, count){
  sendLable({
    label: type,
    value: count
  })
}

reportLog(type, count) {
  sendLog()
}