/* eslint-disable no-console */
/**
 *
 * @param {*} arr 无序数组
 * @param {*} n 数组长度
 * @param {*} k 第k大
 * @returns 数组中第k大的元素
 */
function findKth(arr, n, k) {
  if (k < 0 || k > n || n < 0)
    return -1
  // 第k大的坐标
  const target = n - k
  const p = partition(arr, 0, n - 1)
  if (p === target)
    return arr[p]
  if (p < target)
    return findKth(arr.slice(p + 1), n - p - 1, k)
  else
    return findKth(arr.slice(0, p), p, k - n + p)
}

function partition(arr, start, end) {
  const p = arr[end]
  let l = start - 1
  let r = start
  while (r < end) {
    if (arr[r] < p) {
      l++
      [arr[l], arr[r]] = [arr[r], arr[l]]
    }
    r++
  }
  l++
  [arr[end], arr[l]] = [arr[l], arr[end]]
  return l
}

const nums = [3, 5, 23, 4, 78, 2, 43, 12]
console.log(findKth(nums, nums.length, 3))
