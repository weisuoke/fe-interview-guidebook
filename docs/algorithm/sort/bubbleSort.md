---
nav:
  title: 算法
  order: 10
group:
  title: 排序算法
  order: 2
title: 冒泡排序
order: 1

---

# 冒泡排序

> 冒泡排序的思路：遍历数组，然后将最大数沉到最底部；
>
> **时间复杂度：O(N^2)；**
>
> **空间复杂度：O(1)**

```js
function BubbleSort(arr) {
    if(arr == null || arr.length <= 0){
        return [];
    }
    var len = arr.length;
    for(var end = len - 1; end > 0; end--){
        for(var i = 0; i < end; i++) {
            if(arr[i] > arr[i + 1]){
                swap(arr, i, i + 1);
            }
        }
    }
    return arr;
}
function swap(arr, i, j){
    // var temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;
    //交换也可以用异或运算符
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
}
```