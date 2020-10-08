---
nav:
  title: JavaScript
  order: 1
group:
  title: 函数式编程
  order: 4
title: flat
order: 5
---

# flat

## 基础

- 用法
  - `array.flat([fepth])`
- 功能
  - 会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
- 返回值
  - 一个包含将数组与子数组中所有元素的新数组。
- 注意点
  - flat() 方法会移除数组中的空选项

## 实现方式

1. 使用`reduce`与`concat`，展开一层
2. reduce + concat + isArray + recursivity
   - 根据自己设定层级展开，设置为 Infinity 则全部展开
3. forEach + isArray + push + recursivity
   - 根据自己设定层级展开，设置为 Infinity 则全部展开
   - `forEach` 遍历数组会自动跳过元素
4. for of + isArray + push + recursivity
   - 根据自己设定层级展开，设置为 Infinity则全展开
   - `for of` 循环不能去除数组空位，需要手动去除
5. 使用堆 stack
   - 会全部展开

## 扩展

- 对于不知道层级的数组扁平化处理可利用 toString，把数组变为逗号分隔的字符串，遍历数组把每一项再变回原来的类型。（注意此时会全部转换为 string 类型且若数组元素中包含逗号，会导致错误）
- `const flatten = (arr) => arr.toString().split(',').map(item => +item)`

## 实现

### 方式1

```js
// 使用reduce和concat
Array.prototype.flat1 = function() {
  return this.reduce((acc, val) => {
    acc.concat(val)
  }, [])
}
```

### 方式2

```js
// 使用reduce + concat + isArray +recursivity
Array.prototype.flat2 = function(deep = 1) {
  const flatDeep = (arr, deep = 1) => {
    // return arr.reduce((acc, val) => Array.isArray(val) && deep > 0 ? [...acc, ...flatDeep(val, deep - 1)] : [...acc, val], []);
    return deep > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, deep - 1) : val), []) : arr.slice();
  }
  
  return flatDeep(this, deep)
}
```

### 方式3

```js
// 使用forEach + concat + isArray +recursivity
// forEach 遍历数组会自动跳过空元素
Array.prototype.flat3 = function (deep = 1) {
    const result = [];
    (function flat(arr, deep) {
        arr.forEach((item) => {
            if (Array.isArray(item) && deep > 0) {
                flat(item, deep - 1);
            } else {
                result.push(item);
            }
        })
    })(this, deep);

    return result;
}
```

### 方式4

```js
// 使用for of + concat + isArray +recursivity
// for of 遍历数组会自动跳过空元素
Array.prototype.flat4 = function (deep = 1) {
    const result = [];
    (function flat(arr, deep) {
        for(let item of arr) {
            if (Array.isArray(item) && deep > 0) {
                flat(item, deep - 1);
            } else {
                // 去除空元素，因为void 表达式返回的都是undefined，不适用undefined是因为undefined在局部变量会被重写
                item !== void 0 && result.push(item);
            }
        }
    })(this, deep);

    return result;
}
```

### 方式5

```js
// 使用堆栈stack
Array.prototype.flat5 = function(deep = 1) {
    const stack = [...this];
    const result = [];
    while (stack.length > 0) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }

    // 反转恢复原来顺序
    return result.reverse();
}
```

