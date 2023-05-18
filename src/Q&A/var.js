/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-console */
for (var i = 0; i < 5; ++i) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}

// 5 5 5 5 5
// var声明提升、++i
