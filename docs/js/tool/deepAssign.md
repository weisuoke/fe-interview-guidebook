---
nav:
  title: JavaScript
  order: 1
group:
  title: 工具方法
  order: 3
title: 深合并
order: 6
---

# 深合并

```js
function deepAssign(obj1, obj2) {
  let obj = deepClone(obj1);
  for (var key in obj2) {
    if (!obj2.hasOwnProperty(key)) continue;
    let v2 = obj2[key],
        v1 = obj[key];
    if ((v1 !== null && typeof v1 === "object") && (v2 !== null && typeof v2 === "object")) {
      obj[key] = deepAssign(v1, v2);
      continue;
    }
    obj[key] = v2;
  }
  return obj;
}
```

