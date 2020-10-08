---
nav:
  title: JavaScript
  order: 1
group:
  title: 函数式编程
  order: 4
title: map
order: 2
---

# map

## 基础

- 用法
  - `array.map(function(currentValue[, index[, arr]])[, thisValue])`
- 功能
  - 创建一个新数组，其结果是该数组中的每个元素都调用一次提供的函数后的返回值
- 返回值
  - 一个由原数组每个元素执行回调函数的结果组成的新数组

## 步骤

1. 判断输入的第一个参数类型是否是函数
2. 获取需要处理的数组内容
3. 对数组中每个元素进行处理，并返回结果（注意改变 this 指向）

## 实现

```js
Array.prototype.myMap = function(fn) {
  // 判断输入的第一个参数是不是函数
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function')
  }
  
  // 获取需要处理的数组内容
  const arr = this;
  const len = arr.length;
  // 新建一个空数组用于装载新的内容
  const temp = new Array(len);
  
  // 对数组中每个值进行处理
  for (let i = 0; i < len; i++) {
    // 获取第二个参数，改变this指向
    let result = fn.call(arguments[1], arr[i], i, arr);
    temp[i] = result;
  }
  
  // 返回新的结果
  returm temp;
}
```

