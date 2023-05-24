/* eslint-disable no-prototype-builtins */
class MySet {
  constructor() {
    this.items = {}
    this.size = 0
  }

  has(item) {
    return item in this.items
  }

  add(item) {
    if (!this.has(item)) {
      this.items[item] = item
      this.size++
    }
    return this
  }

  delete(item) {
    if (this.has(item)) {
      delete this.items[item]
      this.size--
    }
    return this
  }

  clear() {
    this.items = {}
    this.size = 0
    return this
  }

  values() {
    const res = []
    for (const i in this.items) {
      if (this.items.hasOwnProperty(i))
        res.push(i)
    }
    return res
    // return Object.values(this.items)
  }
}
export default MySet
