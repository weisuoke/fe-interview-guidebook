---
nav:
  title: JavaScript
  order: 1
group:
  title: 工具方法
  order: 3
title: 类型检测
order: 8
---

# 类型检测

```js
function toType(obj) {
  let class2type = {};
  ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"].forEach(item => {
    class2type["[object" + item + "]"] = item.toLowerCase();
  })
  if (obj == null) return obj + "";
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[class2type.toString.call(obj)] || "object" : 
  	typeof obj;
}
```

