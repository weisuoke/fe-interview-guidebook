---
nav:
  title: JavaScript
  order: 1
group:
  title: 工具方法
  order: 3
title: 深比较
order: 7
---

# 深比较

- 基本数据类型的值，基于 === 比较 即可
- 函数：都转换为字符串再进行比较
- 对象：
  - => 正则/日期：都转换为字符串再进行比较
  - => 普通对象/数组对象等：
    - 1)私有属性的个数
    - 2)分别遍历每个属性，看看属性值是否一致

```js
function _is (val1, val2) {
  const type1 = val1 === null ? 'null' : typeof val1,
        type2 = val2 === null ? 'null' : typeof val2;
  // 函数
  if (type1 === 'function' && type2 === 'function') {
    return val1.toString() === val2.toString();
  }
  // 对象
  if (type1 === 'object' && type2 === 'object') {
    // 正则和日期
    const ct1 = val1.constructor,
          ct2 = val2.constructor;
    if ((ct1 === RegExp && ct2 === RegExp) || (ct1 === Date && ct2 === Date)) {
      return val1.toString() === val2.toString()
    }
    // 其他对象
    const keys1 = Object.keys(val1),
          keys2 = Object.keys(val2);
    if (keys1.length !== keys2.length) return false;
    for (let i = 0; i < keys1.length; i++) {
      let key1 = keys1[i],
          key2 = keys2[i];
      if (key1 !== key2) return false;
      let item1 = val1[key1],
          item2 = val2[key2];
      let flag = _is(item1, item2);
      if (!flag) return false
    }
    return true;
  }
  // 其它
  return 
}
```

