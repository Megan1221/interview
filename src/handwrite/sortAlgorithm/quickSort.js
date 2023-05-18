export function quickSort(nums, head, tail) {
  if (tail - head < 1)
    return
  if (tail > head) {
    const p = partition(nums, head, tail)
    // 易错：p-1& p+1
    quickSort(nums, head, p - 1)
    quickSort(nums, p + 1, tail)
  }
}

function partition(nums, head, tail) {
  const pivot = nums[tail]
  // Index of smaller element and indicates the right position of pivot found so far
  let i = head - 1
  // j用来遍历
  let j = head
  while (j < tail) {
    if (nums[j] < pivot) {
      i++
      [nums[j], nums[i]] = [nums[i], nums[j]]
    }
    j++
  }
  [nums[i + 1], nums[tail]] = [nums[tail], nums[i + 1]]
  return i + 1
}
