---
nav:
  title: JavaScript
  order: 1
group:
  title: 仿写系列
  order: 2
title: 实现 Object.create()
order: 6
---

# 实现 Object.create()

## 原理

- `Object.create(proto, [propertiesObject])`
- 创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`，第二个可选参数为属性描述对象
- 返回值：一个新对象，带着指定的原型对象和属性

## 步骤

1. 新建一个空对象
2. 将该空对象的原理设置为 `proto`
3. 将属性 `propertiesObject` 赋给新建对象
4. 返回该对象

## 实现

```js
Object.ObjectCreate = (proto, propertiesObject) => {
  // 对输入进行检测
  if (typeof proto !== 'object' && typeof proto !== 'function' && proto !== null ){
    throw new Error(`Object prototype may only be an Object or null:${proto}`)
  }
  
  // 新建一个对象
  const result = {}
  // 将该对象的原型设置为 proto
  Object.setPrototypeOf(result, proto);
  // 将属性赋值给该对象
  Object.defineProperties(result, propertiesObject);
  // 返回该对象
  return result;
}
```

