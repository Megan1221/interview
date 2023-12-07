/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-console */

for (var p = 0; p < 5; ++p) {
  setTimeout(() => {
    console.log(p)
  }, 0)
}

// 5 5 5 5 5
// var声明提升、++i

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i, Date.now())
  }, 1000)
}
console.log(i, Date.now())
