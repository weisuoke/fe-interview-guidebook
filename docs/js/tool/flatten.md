---
nav:
  title: JavaScript
  order: 1
group:
  title: 工具方法
  order: 3
title: 数组展平
order: 11
---

#数组展平

## 方法一

```js
const flatten = arr => {
  return arr.reduce((res, cur) => {
    // 如果当前项 cur 为数组，就继续递归展平
    if (Array.isArray(cur)) {
      // 返回新数组包括展开的原数组和新展平的数组元素
      return [...res, ...flatten(cur)];
    } else {
      // 返回新数组包括展开的原数组元素和当前项
      return [...res, cur];
    }
  }, [])
}
```

上面的代码会将多维数组直接展平为一维数组，其实就已经完成了数组展平的工作了

有时候需要你展平一定的深度，不用统统展平成一维，这时候就需要加入一定参数来处理了

## 方法二

```js
const flatten = (arr, depth = 1, res = []) => {
  let i = -1, len = arr.length;
  
  while(++i < len) {
    // 选择当前项来进行判断
    let cur = arr[i];
    // 如果 depth 大于 0 并且当前项 cur 是数组
    if (depth > 0 && Array.isArray(cur)) {
      // 并且 depth 深度大于 1 的时候，继续递归处理，深度 -1
      if (depth > 1) {
        flatten(cur, depth - 1, res);
      } else {
        res.push(cur);
      }
    } else {
      // 当前项 cur 不是数组，就直接加到 res 的后面
      res[res.length] = cur;
    }
  }
  // 返回结果数组
  return res;
}
```

**考点**：数组展平，其实考察的是对于对象类型(数组)的情况判断，是否会调用递归来继续进行展平的问题