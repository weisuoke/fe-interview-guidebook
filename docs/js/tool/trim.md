---
nav:
  title: JavaScript
  order: 1
group:
  title: 工具方法
  order: 3
title: trim
order: 12
---

# Trim

### 实现1

```js
String.prototype.trim = function() {
  return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
```

看起来不怎么样，动用了两次正则替换，实际速度非常惊人，主要得益于浏览器的内部优化。一个著名的例子字符串拼接，直接相加比用Array做成的StringBuffer还快。base2类库使用这种实现。

### 实现2

```js
String.prototype.trim = function() {
	return this.replace(/^\s+/, '').replace(/\s+$/, '');
}
```

和实现1很相似，但稍慢一点，主要原因是它最先是假设至少存在一个空白符。Prototype.js使用这种实现，不过其名字为strip，因为Prototype的方法都是力求与Ruby同名。

### 实现3

```js
String.prototype.trim = function() {
  return this.substring(Math.max(this.search(/\S/), 0),this.search(/\S\s*$/) + 1);
}
```

以截取方式取得空白部分（当然允许中间存在空白符），总共调用了四个原生方法。设计得非常巧妙，substring以两个数字作为参数。Math.max以两个数字作参数，search则返回一个数字。速度比上面两个慢一点，但比下面大多数都快。

### 实现4

```js
String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, '');
}
```

这个可以称得上实现2的简化版，就是利用候选操作符连接两个正则。但这样做就失去了浏览器优化的机会，比不上实现3。由于看来很优雅，许多类库都使用它，如JQuery与mootools

### 实现5

```js
String.prototype.trim = function() {
  var str = this;
  str = str.match(/\S+(?:\s+\S+)*/);
  return str ? str[0] : '';
}
```

match是返回一个数组，因此原字符串符合要求的部分就成为它的元素。为了防止字符串中间的空白符被排除，我们需要动用到非捕获性分组（?:exp）。由于数组可能为空，我们在后面还要做进一步的判定。好像浏览器在处理分组上比较无力，一个字慢。所以不要迷信正则，虽然它基本上是万能的。

### 实现6

```js
String.prototype.trim = function() {
  return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, '$1');
}
```

把符合要求的部分提供出来，放到一个空字符串中。不过效率很差，尤其是在IE6中。

### 实现7

```js
String.prototype.trim = function() {
  return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, '$1');
}
```

和实现6很相似，但用了非捕获分组进行了优点，性能效之有一点点提升。

### 实现8

```js
String.prototype.trim = function() {
  return this.replace(/^\s*((?:[\S\s]*\S)?)\s*$/, '$1');
}
```

沿着上面两个的思路进行改进，动用了非捕获分组与字符集合，用?顶替了*，效果非常惊人。尤其在IE6中，可以用疯狂来形容这次性能的提升，直接秒杀火狐。

### 实现9

```js
String.prototype.trim = function() {
  return this.replace(/^\s*([\S\s]*?)\s*$/, '$1');
}
```

这次是用懒惰匹配顶替非捕获分组，在火狐中得到改善，IE没有上次那么疯狂。

### 实现10

```js
String.prototype.trim = function() {
  var str = this,
  whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
  for (var i = 0,len = str.length; i < len; i++) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(i);
      break;
    }
  }
  for (i = str.length - 1; i >= 0; i--) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(0, i + 1);
      break;
    }
  }
  return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}
```

我只想说，搞出这个的人已经不是用牛来形容，已是神一样的级别。它先是把可能的空白符全部列出来，在第一次遍历中砍掉前面的空白，第二次砍掉后面的空白。全过程只用了indexOf与substring这个专门为处理字符串而生的原生方法，没有使用到正则。速度快得惊人，估计直逼上内部的二进制实现，并且在IE与火狐（其他浏览器当然也毫无疑问）都有良好的表现。速度都是零毫秒级别的。

### 实现11

```js
String.prototype.trim = function() {
  var str = this,
  str = str.replace(/^\s+/, '');
  for (var i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      str = str.substring(0, i + 1);
      break;
    }
  }
  return str;
}
```

实现10已经告诉我们普通的原生字符串截取方法是远胜于正则替换，虽然是复杂一点。但只要正则不过于复杂，我们就可以利用浏览器对正则的优化，改善程序执行效率，如实现8在IE的表现。我想通常不会有人在项目中应用实现10，因为那个whitespace 实现太长太难记了（当然如果你在打造一个类库，它绝对是首先）。实现11可谓其改进版，前面部分的空白由正则替换负责砍掉，后面用原生方法处理，效果不逊于原版，但速度都是非常逆天。

### 实现12

```js
String.prototype.trim = function() {
  var str = this,
  str = str.replace(/^\s\s*/, ''),
  ws = /\s/,
  i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
}
```

实现10与实现11在写法上更好的改进版，注意说的不是性能速度，而是易记与使用上。和它的两个前辈都是零毫秒级别的，以后就用这个来工作与吓人。

下面是老外给出的比较结果，执行背景是对Magna Carta 这文章（超过27,600字符）进行trim操作。

| 实现   | Firefox 2 | IE 6    |
| ------ | --------- | ------- |
| trim1  | 15ms      | < 0.5ms |
| trim2  | 31ms      | < 0.5ms |
| trim3  | 46ms      | 31ms    |
| trim4  | 47ms      | 46ms    |
| trim5  | 156ms     | 1656ms  |
| trim6  | 172ms     | 2406ms  |
| trim7  | 172ms     | 1640ms  |
| trim8  | 281ms     | < 0.5ms |
| trim9  | 125ms     | 78ms    |
| trim10 | < 0.5ms   | < 0.5ms |
| trim11 | < 0.5ms   | < 0.5ms |
| trim12 | < 0.5ms   | < 0.5ms |