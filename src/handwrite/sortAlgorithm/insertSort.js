export function insertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    // 从已经排序的序列最右边的开始比较，找到比其小的数(从后往前找插入位置，因为插入时需要移动后面的数组元素，这样会更方便)
    // 从后往前，方便移动元素
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] > num) {
        nums[j + 1] = nums[j]
      }
      else {
        nums[j + 1] = num
        break
      }
    }
  }
  return nums
}
// 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

// 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
