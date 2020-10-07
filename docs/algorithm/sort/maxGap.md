---
nav:
  title: 算法
  order: 10
group:
  title: 排序算法
  order: 2
title: 桶排序
order: 7
---

# 桶排序

> 桶排序会经历三次遍历：准备一个数组、遍历一遍数组、重构一遍数组，是非基于比较的排序，下面以一个问题来阐述其思路。
>
> **问题：**
>
> 给定一个数组，求如果排序之后，相邻两个数的最大差值，要求时间复杂度O(N),且要求不能用基于比较的排序
>
> **思路：**
>
> 1.准备桶：数组中有N个数就准备N+1个桶
>
> 2.遍历一遍数组，找到最大值max和最小值min 。若min = max，则差值=0；若min≠max，则最小值放在0号桶，最大值放在N号桶，剩下的数属于哪个范围就进哪个桶
>
> 3.根据鸽笼原理，则肯定有一个桶为空桶，设计该桶的目的是为了否定最大值在一个桶中，则最大差值的两个数一定来自于两个桶，但空桶两侧并不一定是最大值
>
> 4.所以只记录所有进入该桶的最小值min和最大值max和一个布尔值表示该桶有没有值
>
> 5.然后遍历这个数组，如果桶是空的，则跳到下一个数，如果桶非空，则找前一个非空桶，则最大差值=当前桶min - 上一个非空桶max，用全局变量更新最大值
>
> **时间复杂度：O(N)**
>
> **空间复杂度：O(N)**

```js
function maxGap(arr) {
    if(arr == null || arr.length <= 0) {
        return 0;
    }
    var len = arr.length;
    var max = -Infinity, min = Infinity;
    //遍历一遍数组,找到最大值max和最小值min
    for(var i = 0; i < len; i++) {
        max = max > arr[i] ? max : arr[i];
        min = min > arr[i] ? arr[i] : min;
    }

    //若min = max,则差值为0;
    if(min == max) {
        return 0;
    }

    var hasNum = new Array(len + 1);
    var mins = new Array(len + 1);
    var maxs = new Array(len + 1);

    var bid = 0;//指定桶的编号

    for(var i = 0; i < len; i++) {
        bid = bucket(arr[i], min, max, len);//获得该值是在哪个桶//由于有N+1个桶，所以间隔就是N个，所以此处除以的是len，然后通过这个函数得到应该放到哪个桶里
        maxs[bid] = hasNum[bid] ? Math.max(arr[i], maxs[bid]) : arr[i];
        mins[bid] = hasNum[bid] ? Math.min(arr[i], mins[bid]) : arr[i];
        hasNum[bid] = true;
    }

    var res = 0;
    var lastMax = maxs[0];

    for(var i = 0; i < len + 1; i++) {
        if(hasNum[i]) {
            res = Math.max(mins[i] - lastMax, res);
            lastMax = maxs[i];
        }
    }
    return res;
}

//获得桶号
//这个函数用于判断在哪个桶中，参数分别为值、最小值、最大值、桶间隔
function bucket(value, min, max, len) {
    return parseInt((value - min) / ((max - min) / len));
}
```

