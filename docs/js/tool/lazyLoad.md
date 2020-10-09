---
nav:
  title: JavaScript
  order: 1
group:
  title: 工具方法
  order: 3
title: 懒加载
order: 10
---

# 懒加载

> 1. 首先，不要将图片地址放到src属性中，而是放到其它属性(data-original)中。
> 2. 页面加载完成后，根据scrollTop判断图片是否在用户的视野内，如果在，则将data-original属性中的值取出存放到src属性中。
> 3. 在滚动事件中重复判断图片是否进入视野，如果进入，则将data-original属性中的值取出存放到src属性中。
>
> `elementNode.getAttribute(name)`：方法通过名称获取属性的值。
>
> `elementNode.setAttribute(name, value)`：方法创建或改变某个新属性。
>
> `elementNode.removeAttribute(name)`：方法通过名称删除属性的值。

```js
// 懒加载代码实现
var viewHeight = document.documentElement.clientHeight;	// 可视化区域的高度

function lazyload () {
  // 获取所有要进行懒加载的图片
  let eles = document.querySelectorAll('img[data-origin][lazyload]');	// 获取属性名中有 data-original 的
  Array.prototype.forEach.call(eles, function(item, index) {
    let rect;
    if (item.dataset.original === '') {
      return;
    }
    
    rect = item.getBoundingClientRect();
    
    // 图片一进入到可视区，动态加载
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      !function() {
        let img = new Image();
        img.src = item.dataset.original;
        img.onload = function () {
          item.src = img.src
        }
        item.removeAttribute('data-original');
        item.removeAttribute('lazyload');
      }
    }
  })
}

lazyload();

document.addEventListener('scroll', lazyload);
```

