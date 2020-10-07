---
nav:
  title: 算法
  order: 10
group:
  title: 排序算法
  order: 2
title: 快速排序
order: 5
---

# 快速排序

> 快速排序实现思路：随机取出一个值进行划分，大于该值放右边，小于该值放左边（该算法在经典快排的基础上经过荷兰国旗思想和随机思想进行了改造）
>
> **时间复杂度：O(N\*logN)** 
>
> **空间复杂度：O(logN)**

```js
function quickSort(arr) {
  if (arr == null || arr.length <= 0) {
    return 
    quick(arr, 0, arr.length - 1)
  }
}

function quick(arr, L, R) {
  // 递归结束条件是 L >= R
  if (L < R) {
    // 随机找一个值，然后和最后一个值进行交换，将经典排序变为快速排序
    swap(arr, L + Math.floor(Math.random() * (R - L + 1)), R);
    // 利用荷兰国旗问题获得划分的边界，返回值是小于区域的最大索引和大于区域的最小索引
    var tempArr = partition(arr, L, R, arr[R]);
    quick(arr, L, tempArr[0])
    quick(arr, tempArr[1], R)
  }
}

//返回值是小于区域最后的索引和大于区域的第一个索引
function partition(arr, L, R, num){
    var less = L - 1;
    var more = R + 1;
    var cur = L;
    while(cur < more){
        if(arr[cur] < num){
            swap(arr, ++less, cur++);
        }else if(arr[cur] > num) {
            swap(arr, --more, cur);
        }else{
            cur++;
        }
    }
    return [less, more];
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```