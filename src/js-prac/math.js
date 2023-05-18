// **表示乘方运算，n**m输出n的m次方
console.log(2 ** 3)

// Math取整函数
console.log('======取整')
console.log(Math.floor(1.23)) // 向下取整
console.log(Math.ceil(1.23)) // 向上取整
console.log(Math.round(1.23)) // 四舍五入
console.log(Math.round(1.55))

// Math log运算
console.log('======log')
console.log(Math.log10(100000));
// Expected output: 5
console.log(Math.log10(2));
// Expected output: 0.3010299956639812
console.log(Math.log10(1));
// Expected output: 0
console.log(Math.log10(0));
// Expected output: -Infinity
console.log(Math.log2(2));
// Expected output: 1

// Math pow 幂运算
console.log('======pow')
console.log(Math.pow(7, 2));
// Expected output: 49
console.log(Math.pow(4, 0.5));
// Expected output: 2


// Math random 随机数
console.log('======random');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));
// Expected output: 0, 1 or 2
console.log(getRandomInt(1));
// Expected output: 0
console.log(Math.random());
// Expected output: a number from 0 to <1