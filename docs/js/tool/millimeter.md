---
nav:
  title: JavaScript
  order: 1
group:
  title: 工具方法
  order: 3
title: 实现千分符
order: 9
---

# 实现千分符

```js
String.prototype.millimeter = function millimeter() {
  return this.replace(/\d{1, 3}(\d{3})+$/g, value => {
    	return value + ','
    })
}
```

