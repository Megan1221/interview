/* eslint-disable no-console */
import { bubbleSort } from './bubbleSort.js'
import { insertSort } from './insertSort.js'
import { mergeSort } from './mergeSort.js'
import { quickSort } from './quickSort.js'
import { selectionSort } from './selectionSort.js'

let nums1 = [2, 5, 4, 3, 8]
console.log(bubbleSort(nums1))

nums1 = [2, 5, 4, 3, 8]
console.log(selectionSort(nums1))

nums1 = [2, 5, 4, 3, 8]
console.log(insertSort(nums1))

nums1 = [2, 5, 4, 3, 8]
mergeSort(nums1, 0, nums1.length - 1)
console.log('merge sort', nums1)

nums1 = [2, 5, 4, 3, 8]
quickSort(nums1, 0, nums1.length - 1)
console.log('quick sort', nums1)
