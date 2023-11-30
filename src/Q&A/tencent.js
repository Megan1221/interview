// function checkWin(arr) {
//   if (arr.length < 3)
//     return false
//   const diff = []
//   for (let i = 1; i < arr.length; i++)
//     diff.push(arr[i] - arr[i - 1])
//   let cnt = 1
//   let cur = diff[0]
//   console.log(diff)
//   for (let j = 1; j < diff.length; j++) {
//     if (diff[j] === cur) {
//       cnt++
//       if (cnt >= 3)
//         return true
//     }
//     else {
//       cnt = 0
//       cur = diff[j]
//     }
//   }
//   return false
// }

// console.log(checkWin([1, 1, 1, 1, 2, 3, 3, 4]))

const tictactoe = {
  current: new Array(9).fill(''),
  isXnext: true,
  init(el) {
    if (!el)
      return
    this.createEl(el)
  },
  createEl(el) {
    const _this = this
    el.className = 'game'
    const gameboard = document.createElement('div')
    gameboard.className = 'game-board'
    for (let i = 0; i < 3; i++) {
      const row = document.createElement('div')
      row.className = 'table-row'
      for (let j = 0; j < 3; j++) {
        const button = document.createElement('button')
        button.className = 'square'
        button.addEventListener('click', event => clickHandler(event, (i * 3 + j)))
        row.appendChild(button)
      }
      gameboard.appendChild(row)
    }
    el.appendChild(gameboard)

    function clickHandler(event, i) {
      event = event || window.event
      // TODO: 完善方格被点击之后的数据处理
      _this.current[i] = _this.isXnext ? 'X' : 'O'
      _this.calculateWinner(_this.current)
    }
  },
  calculateWinner(current) {
    // TODO: 参数为this.current，该方法主要判断某一方是否获胜。若"X"获胜，则返回"X"，如"O"获胜，则返回"O"，若没有获胜方，则返回null
    const xNodes = current.filter(n => n === 'X')
    const oNodes = current.filter(n => n === 'O')
    function checkWin(arr) {
      if (arr.length < 3)
        return false
      const diff = []
      for (let i = 1; i < arr.length; i++)
        diff.push(arr[i] - arr[i - 1])

      let cnt = 1; let cur = diff[0]
      for (let j = 1; j < diff.length; j++) {
        if (diff[j] === cur) {
          cnt++
          if (cnt >= 3)
            return true
        }
        else {
          cnt = 0
          cur = diff[j]
        }
      }
      return false
    }
    if (checkWin(xNodes))
      return 'X'
    if (checkWin(oNodes))
      return 'O'
    return null
  },
}
// 请获取id=tictactoe的节点
const node = document.getElementById('tictactoe')
tictactoe.init(node)
