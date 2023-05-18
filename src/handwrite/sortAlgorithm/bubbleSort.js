export function bubbleSort(nums) {
  if (nums.length <= 1)
    return nums
  // 外循环表示次数
  for (let i = 1; i < nums.length; i++) {
    // 设定一个标记，若为true，则表示此次循环没有进行交换，也就是待排序列已经有序，排序已经完成。
    let changed = false
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        changed = true
      }
    }
    if (!changed)
      break
  }
  return nums
}
// 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

// 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

// 针对所有的元素重复以上的步骤，除了最后一个。

// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
