---
nav:
  title: 算法
  order: 10
group:
  title: 排序算法
  order: 2
title: 堆排序
order: 6
---

# 堆排序

> 堆排序思路：
>
> 1.让数组变成大根堆
>
> 2.把最后一个位置和堆顶做交换
>
> 3.则最大值在最后，则剩下部分做heapify，则重新调整为大根堆，则堆顶位置和该部分最后位置做交换
>
> 4.重复进行，直到减完，则这样最后就调整完毕，整个数组排完序（为一个升序）
>
> **时间复杂度:O(N \* logN)**
>
> **空间复杂度:O(1)**

```js
function heapSort(arr) {
    if(arr == null || arr.length <= 0) {
        return [];
    }

    //首先是建立大顶堆的过程
    for(var i = 0; i < arr.length; i++) {
        heapInsert(arr, i);
    }
    var size = arr.length;//这个值用来指定多少个数组成堆，当得到一个排序的值后这个值减一
    //将堆顶和最后一个位置交换
    /**
     * 当大顶堆建立完成后，然后不断将最后一个位置和堆顶交换；
     * 这样最大值就到了最后，则剩下部分做heapify，重新调整为大根堆，则堆顶位置和倒数第二个位置交换，重复进行，直到全部排序完毕*/
    //由于前面已经是大顶堆，所以直接交换
    swap(arr, 0, --size);
    while(size > 0) {
        //重新变成大顶堆
        heapify(arr, 0, size);
        //进行交换
        swap(arr, 0, --size);
    }
}

//加堆过程中
function heapInsert(arr, index) {
    //比较当前位置和其父位置，若大于其父位置，则进行交换，并将索引移动到其父位置进行循环，否则跳过
    //结束条件是比父位置小或者到达根节点处
    while(arr[index] > arr[parseInt((index - 1) / 2)]){
        //进行交换
        swap(arr, index, parseInt((index - 1) / 2));
        index = parseInt((index - 1) / 2);
    }
}
//减堆过程
/**
 * size指的是这个数组前多少个数构成一个堆
 * 如果你想把堆顶弹出，则把堆顶和最后一个数交换，把size减1，然后从0位置经历一次heapify，调整一下，剩余部分变成大顶堆*/
function heapify(arr, index, size) {
    var left = 2 * index + 1;
    while(left < size) {
        var largest = (left + 1 < size && arr[left] < arr[left + 1]) ? left + 1 : left;
        largest = arr[index] > arr[largest] ? index : largest;

        //如果最大值索引和传进来索引一样，则该值到达指定位置，直接结束循环
        if(index == largest) {
            break;
        }

        //进行交换，并改变索引和其左子节点
        swap(arr, index, largest);
        index = largest;
        left = 2 * index + 1;
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```

