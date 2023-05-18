/* eslint-disable no-console */
const a = {
  b() { console.log('b', this) },
  c: () => console.log('c', this),
}

a.b() // a
a.c() // window（不是a！）

const fn = a.b
fn() // window

const fo = a.c
fo() // window

fo.call(global, []) // window

// 箭头函数的this在定义时就确定了（该函数所在的作用域指向的对象），无法通过call等方式更改
// 作用域是指函数内部，最外层的作用域为window

// 一般的，this指向函数运行（调用）时所在的执行环境（栈）
