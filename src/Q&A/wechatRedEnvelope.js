/* eslint-disable no-console */
/**
 * 要求m元随机分给n个人，边界是不能有零，两位小数(示例：100元随机分给10个人)
 * @param {*} m 总金额
 * @param {*} n 总人数
 * @returns Array, 长度为n，总和为m
 */
function randomArrange(m, n) {
  const res = []

  const pos = new Set([0, m]) // 使用set去重,添加0和m方便统一处理
  // 在n-1处切断（+头、尾之后总长度是n+1）
  while (pos.size < n + 1) {
    const random = parseFloat(Math.random() * m).toFixed(2)
    if (!pos.has(random))
      pos.add(random)
    else
      continue
  }

  // 转成数组并排序
  const arr = Array.from(pos).sort((a, b) => a - b)
  console.log(arr)

  // 作差（线段长度就是红包金额）
  for (let i = 1; i < arr.length; i++)
    res.push((arr[i] - arr[i - 1]).toFixed(2))
  return res
}

const res = randomArrange(100, 10)
const sum = res.reduce((pre, cur) => {
  return pre + Number(cur)
}, 0)
console.log(res)
console.log(sum)

// 面试官提示的算法：绳子取线段
