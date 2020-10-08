---
nav:
  title: JavaScript
  order: 1
group:
  title: 仿写系列
  order: 2
title: 实现 Object.assign()
order: 7
---

# 实现 Object.assign()

## 原理

- `Object.assign(target, source1, ..., sourceN)`
- 用于将源对象（source）的所有可枚举属性复制到目标对象（target）（这其实是浅拷贝的过程）

## 注意点

1. 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会盖前面的属性
2. 如果只有一个参数
   - `Object. assign` 会直接返回该参数
   - 如果该参数不是对象，则会先转成对象，然后再返回
   - 由于 `undefined` 和 `null` 无法转成对对象，将它们作为参数会报错
3. 非对象参数出现在源对象位置（即非首参数）
   - 这些参数都会转成对象，如果无法转成对象便跳过，所以 `undefined` 和 `null` 不会报错
   - 除了字符串以数组形式复制到目标对象，其他值都不会产生效果，这是因为只有字符串的包装对象会产生可枚举属性
4. 只复制源对象的自身属性（不复制继承属性），也不复制可枚举的属性（enumerable: false)
5. 属性名为 `Symbol` 值的属性也会被 `Object assign` 复制

## 步骤

1. 对目标对象进行判断，不能为 `null` 和 `undefined`
2. 将目标对象转换成对象（防止 string、number） 等
3. 获取后续源对象自身的中可枚举对象（包含 Symbol）复制到目标对象
4. 返回该处理好的目标对象
5. 利用 `Object.defineproperty` 将该函数配置为不可枚举的挂载到 Object 上

## 实现

```js
function ObjectAssign(target, ...sources) {
  // 对第一个参数的判断，不能为 undefined 和 null
  if (target === undefined || target === null) {
    throw new TypeError('cannot convert first argument to object');
  }
  
  // 将第一个参数转换为对象（不是对象转换为对象）
  const targetObj = Object(target);
  // 将源对象（source）自身的所有可枚举属性复制到目标对象
  for (let i = 0; i < sources.length; i++) {
    let source = source[i]
    // 对于 undefined 和 null 在源角色中不会报错，会直接跳过
    if (source !== undefined && source !== null) {
      // 将源角色转换成对象
      // 需要将源角色自身的可枚举属性（包含Symbol值的属性）进行复制
      // Reflect.ownKeys(obj)  返回一个数组，包含对象自身的所有属性，不管属性名是Symbol还是字符串，也不管是否可枚举
      const keysArray = Reflect.ownKeys(Object(source));
      for (let nextIndex = 0; nextIndex < keysArray.length; nextIndex++) {
        const nextKey = keysArray[nextIndex];
        // 去除不可枚举属性
        const desc = Object.getOwnPropertyDescriptor(source, nextKey)
        if (desc !== undefined && desc.enumerable) {
          // 后面的属性会覆盖前面的属性
          targetObj[nextKey] = source[nextKey]
        }
      }
    }
  }
  
  return 
}
```

