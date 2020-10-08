---
nav:
  title: JavaScript
  order: 1
group:
  title: 函数式编程
  order: 4
title: filter
order: 3
---

# filter

## 基础

- 用法
  - `array.filter(function(currentValue[, index[, arr]])[, thisValue])`
- 功能
  - 创建一个新数组其包含通过所提供函数实现的测试的所有元素
- 返回值
  - 一个新的、由通过试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组

## 步骤

1. 判断输入的第一个参数类型是否是函数
2. 获取需要处理的数组内容
3. 对数组中每个元素进行处理，根据处理结果获取符合需求的值，返回结果注意改变 this 指向

## 实现

```js
Array.prototype.myFilter = function(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`);
  }
  
  // 获取该数组
  const arr = this;
  // 获取该数组长度
  const len = this.length >>> 0;
  // 新建一个新的数组用于放置该内容
  const temp =[]
  
  // 对数组中每个值进行处理
  for (let i = 0; i < len; i++) {
    // 处理时注意this指向
    const result = fn.call(arguments[1], arr[i], i, arr);
    result && temp.push(arr[i])
  }
  
  return temp
}
```

