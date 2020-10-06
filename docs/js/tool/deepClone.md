---
nav:
  title: JavaScript
  order: 1
group:
  title: 工具方法
  order: 3
title: 深拷贝（深克隆）
order: 4
---

#深拷贝（深克隆） 

## 定义：

不仅把第一级克隆一份给新的数组，如果**原始数组中存在多级**，那么是把**每一级都克隆一份**赋值给新数组的每一个级别

## 方法一：利用 JSON 数据格式

语法：

- `let arr2 = JSON.parse(JSON.stringify(arr1))`;

实现原理：

- JSON.stringify(arr1)：先把原始对象变为一个字符串（去除堆和堆嵌套的关系）
- JSON.parse(...)：在把字符串转换为新的对象，这样浏览器会重新开辟内存来存储信息

应用：

- 对 `数字`/`字符串`/`布尔`/`null`/`普通对象`/`数组对象`  等都没有影响，可以使用

缺点：

- JSON.stringify(arr1)：并不是对所有的值都能有效处理
  - 正则会变成空对象
  - 函数/undefined/Symbol 都会变成null
  - 这样克隆后的信息和原始数据产生差异化
- 日期格式数据变为字符串后，基于parse 也回不到对象格式了

- 举个🌰：一个变态的数组

```js
let arr1 = [10, '20', [30, 40], /\d+/, function () {}, null, undefined, {
    xxx: 'xxx'
}, Symbol('xxx'), new Date()];
```

![image-20201006073935251](https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2020-10-05-233938.png)

## 方法二：自己封装

> 思路：
>
> - 1、传递进来的是函数时，不需要操作，直接返回即可
>   - 因为在一个执行环境栈中一个名字的函数只能又一个，如果我们自己又克隆了一个，会把原来的替换掉，这样做没有任何意义
> - 2、传递进来的是基本数据类型时，不需要操作，直接返回即可
> - 3、传递的是对象类型时
>   - (1). 正则对象：创建一个新的实例储存当前正则即可（因为我们的目的让空间地址不一样即可）
>   - (2). 日期对象：创建一个日期实例储存当前日期
>   - (3). 普通对象&&数组对象：创建一个新的实例，循环存储当前信息；
>     - 普通对象&&数组对象 中有可能还会存在多层嵌套的关系，所以这里我们可以用下递归

- 代码实现：

```js
function deepClone(obj) {
  // 传递进来的如果不是对象，则无需处理，直接返回原始的值即可 （一般 Symbol 和 Function 也不会进行处理）
  if (obj === null) return null
  if (typeof obj !== "object") return obj;
  
  // 过滤掉特殊的对象（正则对象或者日期对象）：直接使用原始值创建当前类的一个新的实例即可，这样克隆后的是新的实例，但是值和之前的一样
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  
  // 如果传递的是数组或者对象，我们需要创建一个新的数组或者对象，用来存储原始的数据
  // obj.constructor 获取当前值的构造器（Array/Object）
  let cloneObj = new obj.constructor;
  for(let key in obj) {
    // 循环原始数据中的每一项，把每一项赋值给新的对象
    if (!obj.hasOwnProperty(key)) continue;
    cloneObj[key] = deepClone(obj[key])
  }
  return cloneObj
}
```

