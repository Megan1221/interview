/* eslint-disable no-unused-vars */
const jsx = (
  <div id="a1">
    <div id="b1">
      <div id="c1"></div>
      <div id="c2"></div>
    </div>
    <div id="b2"></div>
  </div>
)

const container = document.getElementById('root')

// 构建根元素的Fiber对象
const workInProgressRoot = {
  stateNode: container, // 根元素对应的DOM可以直接拿到
  props: {
    children: [jsx],
  },
}

// 下一个要执行的任务
let nextUnitOfWork = workInProgressRoot

function workLoop(deadline) {
  // 是否有空余时间
  // 是否有要执行的任务
  while (nextUnitOfWork && deadline.timeRemaining() > 0)
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  // 表示所有的任务都已经执行完
  if (!nextUnitOfWork) {
    // 进入到第二阶段，执行DOM
    commitRoot()
  }
}

function performUnitOfWork(workInProgressFiber) {
  // 构建当前fiber的子级
  beginWork(workInProgressFiber)
  // 子级的子级
  if (workInProgressFiber.child)
    return workInProgressFiber.child
}

// 从上到下构建Fiber对象
function beginWork(workInProgressFiber) {
  // 1. 创建DOM对象并将其存储在stateNode属性
  if (!workInProgressFiber.stateNode) {
    // 创建DOM
    workInProgressFiber.stateNode = document.creatElement(
      workInProgressFiber.type,
    )
    // 为DOM添加属性
    for (const attr in workInProgressFiber.props) {
      if (attr !== 'children')
        workInProgressFiber.stateNode[attr] = workInProgressFiber.props[attr]
    }
  }
  // 2. 构建当前Fiber的子级Fiber
  if (Array.isArray(workInProgressFiber.props.children)) {
    let previousFiber = null
    workInProgressFiber.props.children.forEach((child, index) => {
      const childFiber = {
        type: child.type,
        props: child.props,
        // 当前的fiber对象要执行的DOM操作(placement: 渲染)
        effectTag: 'PLACEMENT',
        return: workInProgressFiber,
      }
      // 第一个子元素
      if (index === 0)
        workInProgressFiber.child = childFiber
      else
        previousFiber.sibling = childFiber
      previousFiber = childFiber
    })
  }
}
// 从下往上构建Fiber链表
function completeUnitOfWork(workInProgressFiber) {}

function commitRoot() {
  let currentFiber = workInProgressRoot.firstEffect
  while (currentFiber) {
    currentFiber.return.stateNode.appendChild(currentFiber.stateNode)
    currentFiber = currentFiber.nextEffect
  }
}
// 在浏览器空闲的时候执行任务
window.requestCallBack(workLoop)
