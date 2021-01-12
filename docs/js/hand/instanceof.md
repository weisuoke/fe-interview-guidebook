---
nav:
  title: JavaScript
  order: 1
group:
  title: 仿写系列
  order: 2
title: 实现 instanceof
order: 5
---

# 实现 instanceof

## 原理

只要右边变量（一般是构造函数）的 `prototype` 在左边变量（一般是对象）的原型链上即可。因此，`instanceof` 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则返回 false。即通过判断 `L.__proto__.__proto__.... === R.prototype` 来确定最终结果

## 步骤

1. 获取左边变量的隐式原型（即： `__proto__`）
2. 获取右边变量的显式原型（即： `prototype`）
3. 进行比较`L.__proto__.__proto__.... === R.prototype`，相等则返回 `true`，否则返回`false`

## 实现A

```js
function instanceof2(left, right) {
  let leftVal = Object.getPrototypeOf(left);
  const rightVal = right.prototype;
  
  while (leftVal !== null) {
    if (leftVal === rightVal) {
      return true
    }
    leftVal = Object.getPrototypeOf(leftVal);
  }
  
  return false
}
```

## 实现B

```js
function instanceOf(A, B) {
  B = B.prototype;
  A = A.__proto__;
  while(true) {
    if (A === null) {
      return false
    }
    if (A === B) {
      return true
    }
    A = A.__proto__
  }
}
```

