---
nav:
  title: JavaScript
  order: 1
group:
  title: ES6+
  order: 10
title: let/const/var
order: 1
---

# let/const/var

## let const var的区别是什么？

### 提升机制不一致

`var` vs `let` 

> 在全局作用域或还是在局部作用域中，使用 `var` 关键字声明的变量，都会被提升到作用域的最顶部，这就是我们常说的变量提升。

> `let`只在当前作用域中有效

### 是否能够重复声明

> `var` 不管是在全局作用域还是局部作用域都可以重复声明
>
> `let` 在同一个作用域中不能够重复声明

### const 声明对象

`const` 声明一个常量

> 这个常量如果是基本类型，那是不能对其修改
>
> 这个常量如果是复杂类型，那不能修改其指针指向。比如我们定义一个对象，我们可以修改对象里的属性值，但是不能去重写整个对象。

### TDZ（temporal dead zone） 暂时死区 ??

**TDZ工作原理**

JavaScript引擎在扫描代码时，如果遇到的是`var`，就会将他们提升到当前作用域的顶端。如果遇到的是`let`、`const`，就会将声明放到`TDZ`中，如果访问`TDZ`中的变量就会报错。

### 对象挂载

全局声明的变量中，`var`会挂载到`window`对象上，而`let`和`const`声明不会存在这个问题。



## 参考阅读

- [一看就懂的var、let、const三者区别](https://juejin.cn/post/6925641096152399880)