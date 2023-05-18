export function mergeSort(nums, head = 0, tail) {
  if (tail <= head)
    return
  // 二分
  const mid = parseInt((tail - head) / 2) + head
  mergeSort(nums, head, mid)
  mergeSort(nums, mid + 1, tail)
  // 合并
  merge(nums, head, mid, tail)
}

function merge(nums, head, mid, tail) {
  const res = []
  let i = head
  let j = mid + 1
  let k = 0
  while (i <= mid && j <= tail) {
    if (nums[i] <= nums[j])
      res[k++] = nums[i++]
    else
      res[k++] = nums[j++]
  }
  while (i <= mid)
    res[k++] = nums[i++]
  while (j <= tail)
    res[k++] = nums[j++]

  // 循环边界！易错
  for (let i = head; i <= tail; i++)
    nums[i] = res[i - head]
}
