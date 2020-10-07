---
nav:
  title: 算法
  order: 10
group:
  title: 排序算法
  order: 2
title: 选择排序
order: 2
---

# 选择排序

> 选择排序的实现思路：遍历数组，把最小数放在头部；
>
> **时间复杂度：O(N^2)；**
>
> **空间复杂度：O(1)**

```js
function SelectionSort(arr) {
  if (arr == null || arr.length < 0) {
    return [];
  }
  
  for (var i = 0; i < arr.length - 1; i++) {
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex;
    }
    swap(arr, i, minIndex);
  }
  
  return arr;
}

function swap(arr, i, j) {
   arr[i] = arr[i] ^ arr[j];
   arr[j] = arr[i] ^ arr[j];
   arr[i] = arr[i] ^ arr[j];
}
```