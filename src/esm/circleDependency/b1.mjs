/* eslint-disable max-statements-per-line */
/* eslint-disable no-console */
// b.mjs
import { foo } from './a1.mjs'
console.log('b.mjs')
console.log(foo())
function bar() { return 'bar' }
export { bar }
