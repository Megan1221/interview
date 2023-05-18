const arr = [1, 1, 1, 1, 1]
const res = arr.reduce((total, currentValue, currentIndex, arr) => {
  // return total; // 100
  total += currentValue;
  return total; // 105
}, 100)
console.log(res)