---
nav:
  title: JavaScript
  order: 1
group:
  title: 基础
  order: 1
title: Async
order: 60
---

# Async

## 概述

ES2017 标准引入了 async 函数，使得异步操作变得更加方便。简言之，该函数就是 generator 函数的语法糖。

### 优缺点

- 优点
  - 内置执行器，可以自动执行；语义相比 Generators 更加清晰；返回值是  Promise, Generator 函数的返回值是 Iterator 对象操作更加方便。
- 缺点
  - 增加学习成本。

### Async 函数对 Generators 函数的改进

1. 内置执行器。Generatore 函数的执行必须靠执行器
2. 更好的语义。async 和 await 起星号和 yield 语义更加清楚了。
3. 适用度更广。co 模块约定，yield 命令后面只能是 `Thunk` 函数或 `Promise` 对象，而 async 函数的 await 命令后面，可以是 Promise 对象和原始类型的值
4. 返回值是 Promise。async 函数的返回值是  Promise 对象，这比 Generator 函数的返回值 Iterator 对象方便，可以用 then 指示下ー步操作

## 使用

```js
const fs = require("fs");

const readFile = function (fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) {
        return reject(error)
      }
      resolve(data)
    })
  })
}

const foo = function* () {
  const f1 = yield readFile('/src/lib');
  const f2 = yield readFile('/src/utils');
  
  console.log(f1.toString());
  console.log(f2.toString());
}
```

把上面代码的`Generator`函数 `foo` 可以写成 `async` 函数，就是这样：

```js
const asyncReadFile = async function() {
	const f1 = await readFile('/src/lib');
  const f2 = await readFile('/src/utils');
  
  console.log(f1.toString());
  console.log(f2.toString());
}
```

可以发现，`async`函数就是将`Generator`函数的星号(`*`)替换成`async`，将 `yield`替换成 `await`，仅此而已。

`async`函数是基于 `Generator`的改进，体现在以下4点:

1. 内置执行器。 `Generator`函数的执行必须靠执行器。所以才有了 `Thunk`函数和`co`模块，而 `async`函数自带执行器。`async`函数的执行和普通函数一样。
2. 更好的语义。 `async`和`await`，比起星号和`yield`，语义更清楚了。 `async`表示函数里有异步操作，`await`表示紧跟在后面的表达式需要等待结果。
3. 更广的适应性。 即使 `Generator`函数可以借助`co`模块自动执行，但是`co`模块后面只能是`Thunk`函数或`Promise`对象，而`async`函数的`await`命令后面，可以是 Promise对象和原始类型的值（数值、字符串和布尔值，但这是会自动转成立即 `resolved`的 `Promise对象`）。
4. 返回值是 `Promise`。 aysnc函数返回值为 `Promise`，这比`Generator`函数的返回值是`Iterator`对象方便多了。

`async`函数完全可以看作多个异步操作，包装成的一个`Promise` 对象，而await命令就是内部`then`命令的语法糖。

## 实现

> 这是Async的实现原理，即将Generator函数作为参数放入run函数中，最终实现自动执行并返回Promise对象。

```js
function run(genF) {
  // 返回值是 Promise
  return new Promise((resolve, reject) => {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        // 执行该函数，获取一个有着 value 和 done 两个属性的对象
        next = nextF()
      } catch (e) {
        // 出现异常则将该 Promise 变为 rejected 状态
        reject(e)
      }
      
      // 判断是否达到末尾， Generator 函数达到末尾则将该 Promise 变为 fulfilled 状态
      if (next.done) {
        return resolve(next.value)
      }
      
      // 没到达末尾，则利用 Promise 封装该 value，直到执行完毕，反复调用 step 函数，实现自动执行
      Promise.resolve(next.value).then((v) => {
        step(() => gen.next(v))
      }, (e) => {
        step(() => gen.throw(e))
      })
    }
    
    step(() => gen.next(undefined));
  })
}
```

## 常见关于 async 的笔试题



## 参考阅读

- [async原理解析](https://juejin.cn/post/6844904085708079112#heading-2)
- [async + await 原理](https://juejin.cn/post/6844904079840247821#heading-5)
- [用async-await实现类似Promise.all()的执行效果](https://blog.csdn.net/github_38589282/article/details/79268484)