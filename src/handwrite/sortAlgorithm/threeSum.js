/* eslint-disable no-console */
function threeSum(nums, target) {
  let minDiff = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] + twoSum(nums.slice(0, i).concat(nums.slice(i + 1)), target - nums[i])
    const diff = target - sum
    if (Math.abs(diff) <= Math.abs(minDiff))
      minDiff = diff
  }
  return target - minDiff
}

function twoSum(nums, target) {
  nums.sort((a, b) => a - b)
  let l = 0
  let r = nums.length - 1
  let minDiff = Number.MAX_SAFE_INTEGER
  while (r >= l) {
    const sum = nums[l] + nums[r]
    if (sum === target)
      return sum
    if (sum > target)
      r--
    else
      l++

    if (Math.abs(target - sum) < Math.abs(minDiff))
      minDiff = target - sum
  }
  return target - minDiff
}

const nums = [1, 3, 2, 8, 10, 5, 4]
const target = 20
const res = threeSum(nums, target)
console.log(res)
