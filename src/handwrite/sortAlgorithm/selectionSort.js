export function selectionSort(nums) {
  // 总共要经过 N-1 轮比较
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[min])
        min = j
    }
    [nums[min], nums[i]] = [nums[i], nums[min]]
  }
  return nums
}
// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置

// 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。

// 重复第二步，直到所有元素均排序完毕。
