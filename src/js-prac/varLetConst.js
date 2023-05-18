console.log(func)
var func = 5
console.log(func)
var func = () => 3
// function func() {
//   return 3
// }
console.log(func)
let a = 3
if (true) {
  let a = 2
  !(() => {
    b = 5
  })()
} 

console.log(a)
console.log(b)