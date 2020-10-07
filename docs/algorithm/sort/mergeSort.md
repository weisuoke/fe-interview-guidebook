---
nav:
  title: 算法
  order: 10
group:
  title: 排序算法
  order: 2
title: 归并排序
order: 4
---

# 归并排序

> 归并排序的思路：
>
> 1.先左侧部分排好序
>
> 2.再右侧部分排好序
>
> 3.再准备一个辅助数组，用外排的方式，小的开始填，直到有个动到末尾，将另一个数组剩余部分拷贝到末尾
>
> 4.再将辅助数组拷贝回原数组
>
> **时间复杂度:O(N \* logN)**
>
> **空间复杂度:O(N)**

## 递归实现

```js
function mergeSort(arr) {
  if (arr == null || arr.length <= 0) {
    return []
  }
  sortProcess(arr, 0, arr.length - 1);
  return arr
}

function sortProcess(arr, L, R) {
  // 递归终止条件，就是左右边界索引一样
  if (L == R) {
    return;
  }
  var middle = L + ((R - L) >> 1); // 找出中间值
  sortProcess(arr, L, middle);	// 对左侧部分进行递归
  sortProcess(arr, middle + 1, R); // 对右侧部分进行递归
  merge(arr, L, middle, R);	// 然后利用外排方式进行结合
}

function merge(arr, L, middle, R) {
  var help = [];
  var l = L;
  var r = middle + l;
  var index = 0;
  // 利用外排的方式进行
  while(l <= middle && r <= R) {
    help[index++] = arr[l] < arr[r] ? arr[l++] : arr[r++];
  }
  while(l <= middle) {
    help.push(arr[l++]);
  }
  while(r <= R) {
    help.push(arr[r++]);
  }
  
  for(var i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }
  
  //  arr.splice(L, help.length, ...help);	// 这个利用了 ES6 的语法
}

```

## 循环实现

```js
function mergeSort(arr) {
	if (arr == null || arr.length <= 0) {
    return [];
  }
 	var len = arr.length;
  // i 每次乘 2，是因为每次合并以后小组元素就变成两倍个了
  for(var i = 1; i < len; i *= 2) {
    var index = 0;	// 第一组的起始索引
    while( 2 * i + index <= len) {
      index += 2 * i;
      merge(arr, index - 2 * i, index - i, index);
    }
    // 说明剩余两个小组，但其中一个小组数据的数量已经不足2的幂次方个
    if (index + i < len) {
      merge (arr, index, index + i, len);
    }
  }
  
  return arr;
}

//利用外排的方式进行结合
function merge(arr, start, mid, end){
    //新建一个辅助数组
    var help = [];
    var l = start, r = mid;
    var i = 0;
    while(l < mid && r < end){
        help[i++] = arr[l] < arr[r] ? arr[l++] : arr[r++];
    }
    while(l < mid){
        help[i++] = arr[l++];
    }
    while(r < end){
        help[i++] = arr[r++];
    }
    for(var j = 0; j < help.length; j++){
        arr[start + j] = help[j];
    }
}
```

