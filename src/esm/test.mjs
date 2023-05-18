/* eslint-disable no-console */
export default function test() {
  console.log('test')
  console.log(import.meta)
  // { 
  //   resolve(){},
  //   url:"http://127.0.0.1:5500/src/esm/test.js"
  // }
  const url = new URL('data.txt', import.meta.url)
  console.log(url)
}