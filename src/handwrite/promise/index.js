/* eslint-disable max-statements-per-line */
/* eslint-disable no-console */
const executor = (resolve, reject) => {
  setTimeout(() => {
    const random = Math.random() < 0.5
    if (random)
      resolve('Success')
    else
      reject('Too big')
  }, 0)
}
const PENDING = 'pending'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    // init
    this.promiseState = PENDING
    this.promiseResult = null

    // 处理class中this指向问题（一般通过箭头函数、bind或者proxy）
    this.initBind()

    // executor中可能会throw error
    try {
      executor(this.resolve, this.reject)
    }
    catch (e) {
      this.reject(e)
    }

    // 回调
    this.resolveCallbacks = []
    this.rejectCallbacks = []
  }

  resolve(result) {
    setTimeout(() => {
      // 状态不可变
      if (this.promiseState !== PENDING)
        return
      this.promiseResult = result
      this.promiseState = FULLFILLED
      this.resolveCallbacks.forEach(cb => cb(this.promiseResult))
    }, 0)
  }

  reject(reason) {
    setTimeout(() => {
      // 状态不可变
      if (this.promiseState !== PENDING)
        return
      this.promiseResult = reason
      this.promiseState = REJECTED
      this.rejectCallbacks.forEach(cb => cb(this.promiseResult))
    }, 0)
  }

  initBind() {
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  then(onResolved, onRejected) {
    const newP = new MyPromise((resolve, reject) => {
      const decorateCallback = (cb) => {
        // cb可能会抛出错误
        try {
          // this指向原来的/前一个promise实例
          const res = cb(this.promiseResult)
          if (res instanceof MyPromise)
            res.then(resolve, reject)
          else
            resolve(res)
        }
        catch (e) {
          // reject已经绑定在对应的promise实例上了
          reject(e)
        }
      }

      onResolved = typeof onResolved === 'function' ? onResolved : val => val
      onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason }
      switch (this.promiseState) {
        case FULLFILLED:
          decorateCallback(onResolved)
          break
        case REJECTED:
          decorateCallback(onRejected)
          break
        case PENDING:
          this.resolveCallbacks.push(decorateCallback.bind(this, onResolved))
          this.rejectCallbacks.push(decorateCallback.bind(this, onRejected))
          break
        default:
          break
      }
    })
    return newP
  }
}
// all,race, allSettled, any
const all = (promises) => {
  // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
  // 如果所有Promise都成功，则返回成功结果数组
  // 如果有一个Promise失败，则返回这个失败结果
  const res = []
  let cnt = 0
  return new MyPromise((resolve, reject) => {
    promises.forEach((p) => {
      // 数组中如有非Promise项，则此项当做成功
      if (p instanceof MyPromise) {
        p.then(() => {
          cnt++
          res.push(p.promiseResult)
        }, (reason) => {
          reject(reason)
        })
      }
      else {
        cnt++
        res.push(p)
      }
    })
    if (cnt === promises.length)
      resolve(res)
  })
}
const race = (promises) => {
  // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
  // 哪个Promise最快得到结果，就返回那个结果，无论成功失败
  return new MyPromise((resolve, reject) => {
    promises.forEach((p) => {
      if (p instanceof MyPromise) {
        p.then((res) => {
          resolve(res)
        }, (reason) => {
          reject(reason)
        })
      }
      else {
        resolve(p)
      }
    })
  })
}
const allSettled = (promises) => {
  // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
  // 把每一个Promise的结果，集合成数组，返回
  const res = []
  const cnt = 0
  return new MyPromise((resolve, reject) => {
    promises.forEach((p) => {
      // 数组中如有非Promise项，则此项当做成功
      if (p instanceof MyPromise) {
        p.then(() => {
          res.push(p.promiseResult)
        }, () => {
          res.push(p.promiseResult)
        })
      }
      else {
        res.push(p)
      }
    })
    if (cnt === promises.length)
      resolve(res)
  })
}
const any = (promises) => {
  // 接收一个Promise数组，数组中如有非Promise项，则此项当做成功
  // 如果有一个Promise成功，则返回这个成功结果
  // 如果所有Promise都失败，则报错
  const res = []
  let cnt = 0
  return new MyPromise((resolve, reject) => {
    promises.forEach((p) => {
      // 数组中如有非Promise项，则此项当做成功
      if (p instanceof MyPromise) {
        p.then(() => {
          resolve(p.promiseResult)
        }, (reason) => {
          cnt++
          res.push(p.promiseResult)
        })
      }
      else {
        resolve(p)
      }
    })
    if (cnt === promises.length)
      reject(res)
  })
}

MyPromise.prototype.all = all
MyPromise.prototype.race = race
MyPromise.prototype.allSettled = allSettled
MyPromise.prototype.any = any

// 测试
export const test = new MyPromise(executor)
window.test = test
test.then(
  (res) => {
    console.log(111, res)
    return new MyPromise((resolve, reject) => { resolve(3) })
  },
  (reason) => { throw new Error(reason) },
).then(
  (res) => { console.log(222, res) },
  (reason) => { console.error(222, reason) },
)
