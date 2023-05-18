/**
 * 给定数组里，找长度m的子串最小和
 * 输入 [14,8,4,5,13,7,9,5], 3
 * 输出 17
 */
function findMinSubSum(nums, m) {
  let subSum = 0
  for (let i = 0; i < m; i++)
    subSum += nums[i]

  let minNum = subSum

  for (let i = 0; i < nums.length - m; i++) {
    const sum = subSum - nums[i] + nums[i + m]
    minNum = minNum < sum ? minNum : sum
  }
  return minNum
}

// eslint-disable-next-line no-console
console.log(findMinSubSum([14, 8, 4, 5, 13, 7, 9, 5], 3))
/**
 * 时间复杂度从二层循环降低到线性时间复杂度
 * 如何利用已有的计算结果
 */
