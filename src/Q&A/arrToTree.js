/* eslint-disable no-console */
/**
 * 写代码将以下数据结构整理成树状
 * index是该元素在数组中的先后位置
 * 嵌套层数不确定
 */
const array = [
  { id: '1', parentId: null, name: 'My app', index: 0 },
  { id: '2', parentId: '1', name: 'Node 1', index: 0 },
  { id: '3', parentId: '1', name: 'Node 2', index: 1 },
  { id: '4', parentId: '1', name: 'Node 3', index: 2 },
  { id: '5', parentId: '2', name: 'Node 4', index: 0 },
  { id: '6', parentId: '2', name: 'Node 5', index: 1 },
]

const result = []
// your code here
function trans(array) {
  while (array.length > 0) {
    const item = array.shift()
    transItem(item, array)
  }
}
function transItem(item, array) {
  console.log('item:', item)
  const { id, name, index, parentId } = item
  const obj = { id, name, index }
  if (parentId) {
    let parent = findParent(result, parentId)
    if (!parent) {
      const idx = array.findIndex(e => e.id === parentId)
      if (idx === 0)
        parent = array.shift()
      else
        parent = array.splice(idx - 1, 1)[0]
      transItem(parent, array)
    }
    parent.subNodes ? parent.subNodes[index] = obj : parent.subNodes = [obj]
  }
  else {
    result[index] = obj
  }
  console.log('===', result)
}

// 直接arr[idx] = obj就行了！
// function insertByIndex(arr, obj, idx) {
//   for (const i in arr) {
//     if (arr[i].index < idx) {
//       continue
//     }
//     else {
//       arr.splice(i, 0, obj)
//       return
//     }
//   }
//   arr.push(obj)
// }

// 可以用map加速
function findParent(arr, id) {
  for (const i of arr) {
    if (i.id === id) {
      return i
    }
    else {
      if (i.subNodes) {
        const res = findParent(i.subNodes, id)
        if (res)
          return res
      }
    }
  }
  return null
}

trans(array)
console.log(result)

// [
//   { "id": "1", "name": "My app","index": 0, subNodes: [
//     { "id": "2","name": "Node 1","index": 0, subNodes: [
//       { "id": "5","name": "Node 4","index": 0 },
//       { "id": "6","name": "Node 5","index": 1 }
//     ] },
//     { "id": "3","name": "Node 2","index": 1 },
//     { "id": "4","name": "Node 3","index": 2 }
//   ] }
// ]

// 数组方法：find，findIndex，includes, push, pop
// 虽然可以「简写对象属性」，但是不能obj={el.name, el.age}
// 可以先把框架搭起来
