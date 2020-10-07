---
nav:
  title: 算法
  order: 10
group:
  title: 排序算法
  order: 2
title: 插入排序
order: 3
---

# 插入排序

> 插入排序实现思路：将一个新的数，和前面的比较，只要当前数小于前一个则和前一个交换位置，否则终止；
>
> **时间复杂度：O(N^2)；**
>
> **空间复杂度：O(1)**

```js
function insertSort(arr) {
  if (arr == null || arr.length <= 0) {
    return [];
  }
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    for (var j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
  return arr;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```

