/* eslint-disable no-extend-native */
/* eslint-disable no-console */
const arr = ['a', 'b', 'c']
Object.prototype.p1 = 'p1'
Array.prototype.p2 = 'p2'

for (const i in arr)
  console.log(i)

console.log('============')
for (const i of arr)
  console.log(i)
