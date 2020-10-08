---
nav:
  title: JavaScript
  order: 1
group:
  title: 函数式编程
  order: 4
title: reduce
order: 4
---

# reduce

## 基础

- 用法
  - `array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)`
- 功能
  - 对数组中的每个元素执行一个由您提供的 reducer 函数（升序执行），将其结果汇总为单个返回值
- 返回值
  - 函数累计处理的结果
- 注意点
  - 当数组为空且初始值为空的时候会报错

## 步骤

1. 判断输入的第一个参数类型是否是函数
2. 获取需要处理的数组内容
3. 获取初始值并校验数组和初始值是否同时为空
4. 进行累计处理并返回最终结果

## 实现

```js
Array.prototype.myReduce = function(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`);
  }
  
  const arr = this;
  const len = arr.length >>> 0;
  let value;	// 最终返回值
  let k = 0;	// 当前索引
  
  if (arguments.length >= 2) {
    value = arguments[1]
  } else {
    // 当数组为稀疏数组时，判断数组当前是否有元素，如果没有索引加一
    while (k < len && !(k in arr)) {
      k++
    }
    // 如果数组为空且初始值不存在则报错
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    value = arr[k++]
  }
  
  while(k < len) {
    if (k in arr) {
      value = fn(value, arr[k], k, arr);
    }
    
    k++
  }
  
  return value;
}
```

