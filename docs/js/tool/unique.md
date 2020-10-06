---
nav:
  title: JavaScript
  order: 1
group:
  title: 工具方法
  order: 3
title: 数组去重
order: 9
---

# 数组去重

## 方法一： Set

```js
let newArr = [...new Set(arr)];
```

## 方法二： 数组filter

```js
const arr = [1, 2, 1, 2, 3, 4, 'l', 2, 1, 3, 'l'];
const newArr = arr.filter(function(ele, index, array) {
	return index === array.indexOf(ele)
});
console.log(newArr); // [ 1, 2, 3, 4, 'l' ]
```

## 方法三： 数组indexOf

```js
var arr = [1, 2, 1, 2, 3, 4, 'l', 2, 1, 3, 'l'];
Array.prototype.unique2 = function() {

    var newArr = [];

    var len = this.length;

    for(var i = 0; i < len; i++) {

        var cur = this[i];

        if(newArr.indexOf(cur) === -1) {

            newArr[newArr.length] = cur;

        }

    }

    return newArr;

}
console.log(arr.unique2());  // (5) [1, 2, 3, 4, "l"]
```

## 方法四： 利用普通对象object去重（对象中key名不能有重复的）

```js
Array.prototype.unique3 = function() {
    var newArr = this.slice(0);
    var len = this.length;
    var obj = {};

    for(var i = 0; i < len; i++) {
      var cur = newArr[i];
      if(obj[cur]) {
        newArr[i] = newArr[newArr.length - 1];
        newArr.length--;
        i--;
        continue;
      }
      obj[cur] = cur;
    }
  return newArr;
}

console.log(arr.unique3());  // (5) [1, 2, "l", 3, 4]
var arr = [1, 2, 1, 2, 3, 4, 'l', 2, 1, 3, 'l'];
```

```js
// 利用对象另种处理方式
Array.prototype.unique4 = function() {

    var json = {}
    var newArr = []
    var len = this.length
    
    for(var i = 0; i < len; i++) {
      var cur = this[i];
      if (typeof json[cur] === 'undefined') {
        json[cur] = true;
        newArr.push(cur)
      }
    }
  return newArr;
}

var arr = [1, 2, 1, 2, 3, 4, 'l', 2, 1, 3, 'l'];
console.log(arr.unique4());  // (5) [1, 2, 3, 4, "l"]
```

## 方法五：双循环去重

```js
Array.prototype.distinct1 = function () {
  var arr = this

  for (var i = 0; i < arr.length - 1; i++) {
    var cur = arr[i]
    for (var j = i + 1; j < arr.length;) {
      cur === arr[j] ? arr.splice(j, 1) : j++
    }
  }
  return arr;
}

var arr = [1, 2, 3, 4, 4, 1, 1, 2, 1, 1, 1]
console.log(arr.distinct1()) // (4) [1, 2, 3, 4]

```

