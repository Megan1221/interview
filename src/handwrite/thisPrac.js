/* eslint-disable no-console */
const a = 1
function fun1() {
  this.a = 2
  console.log(this) // window
  const b = () => {
    console.log(this, this.a)// window 2
  }
  b()
}

fun1()
